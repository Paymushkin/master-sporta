<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { regions } from '@/data/clubs';
import {
    loadYandexMaps,
    YANDEX_MAP_WIDGET_URL,
    type YandexMapInstance,
} from '@/lib/yandex-maps';

const mapEl = ref<HTMLElement | null>(null);
const failed = ref(false);
const map = shallowRef<YandexMapInstance | null>(null);
let resizeObserver: ResizeObserver | null = null;

const markerSize = (clubs: number) => Math.max(32, Math.min(44, 26 + clubs / 10));

const clubsLabel = (count: number) => {
    const mod10 = count % 10;
    const mod100 = count % 100;

    if (mod10 === 1 && mod100 !== 11) {
        return `${count} клуб`;
    }

    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
        return `${count} клуба`;
    }

    return `${count} клубов`;
};

onMounted(async () => {
    if (!mapEl.value) {
        return;
    }

    try {
        const ymaps = await loadYandexMaps();
        const container = mapEl.value;

        const instance = new ymaps.Map(
            container,
            {
                center: [63.2, 95],
                zoom: 3,
                controls: [],
            },
            {
                suppressMapOpenBlock: true,
                yandexMapDisablePoiInteractivity: true,
            },
        );

        instance.behaviors.disable(['scrollZoom', 'dblClickZoom']);

        for (const control of [
            'trafficControl',
            'rulerControl',
            'zoomControl',
            'geolocationControl',
            'searchControl',
            'typeSelector',
            'fullscreenControl',
            'routeButtonControl',
        ]) {
            instance.controls.remove(control);
        }

        const layout = ymaps.templateLayoutFactory.createClass(
            '<div class="ms-club-marker" style="width:$[properties.size]px;height:$[properties.size]px;margin-left:-$[properties.half]px;margin-top:-$[properties.half]px">$[properties.iconContent]</div>',
        );

        for (const region of regions) {
            const size = markerSize(region.clubs);

            instance.geoObjects.add(
                new ymaps.Placemark(
                    [region.lat, region.lng],
                    {
                        iconContent: String(region.clubs),
                        hintContent: `${region.name} · ${clubsLabel(region.clubs)}`,
                        size,
                        half: Math.round(size / 2),
                    },
                    {
                        iconLayout: layout,
                        iconShape: {
                            type: 'Circle',
                            coordinates: [0, 0],
                            radius: size / 2,
                        },
                    },
                ),
            );
        }

        map.value = instance;
        instance.container.fitToViewport();

        resizeObserver = new ResizeObserver(() => {
            map.value?.container.fitToViewport();
        });
        resizeObserver.observe(container);
    } catch {
        failed.value = true;
    }
});

onBeforeUnmount(() => {
    resizeObserver?.disconnect();
    resizeObserver = null;
    map.value?.destroy();
    map.value = null;
});
</script>

<template>
    <div class="ms-yandex-map relative h-full min-h-[180px] overflow-hidden rounded-md bg-[#E8F1FA]">
        <div
            v-show="!failed"
            ref="mapEl"
            class="h-full w-full"
            role="img"
            aria-label="Карта клубов России"
        />
        <iframe
            v-if="failed"
            :src="YANDEX_MAP_WIDGET_URL"
            class="h-full w-full border-0"
            title="Карта клубов России"
            loading="lazy"
            allowfullscreen
        />
    </div>
</template>

<style>
.ms-club-marker {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background: #0878f9;
    color: #fff;
    font-family: Inter, Arial, sans-serif;
    font-size: 11px;
    font-weight: 700;
    line-height: 1;
    box-shadow: 0 4px 10px rgba(8, 120, 249, 0.35);
}

.ms-yandex-map [class*='traffic'],
.ms-yandex-map [class*='ruler'] {
    display: none !important;
}
</style>
