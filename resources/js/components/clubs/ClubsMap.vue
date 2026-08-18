<script setup lang="ts">
import { computed, ref } from 'vue';
import ClubCard from '@/components/clubs/ClubCard.vue';
import DemoHint from '@/components/ui/DemoHint.vue';
import { clubs, featuredClub, regions } from '@/data/clubs';
import type { Region } from '@/types';

const emit = defineEmits<{
    enroll: [];
}>();

const selectedId = ref(regions[0].id);

const selected = computed(() => regions.find((region) => region.id === selectedId.value) ?? regions[0]);

const selectedClub = computed(
    () => clubs.find((club) => club.regionId === selected.value.id) ?? featuredClub,
);

const selectRegion = (region: Region) => {
    selectedId.value = region.id;
};
</script>

<template>
    <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.9fr)]">
        <div class="card-dark relative overflow-hidden p-4 md:p-6">
            <div class="mb-4 flex items-start justify-between gap-4">
                <div>
                    <p class="label text-blue-400">Карта клубов</p>
                    <p class="mt-1 text-sm text-white/50">Выберите регион, чтобы увидеть демонстрационные показатели</p>
                </div>
                <DemoHint tone="dark" />
            </div>

            <div class="relative">
                <svg
                    viewBox="0 0 1000 480"
                    class="h-auto w-full"
                    role="img"
                    aria-label="Карта клубов кикбоксинга России"
                >
                    <defs>
                        <radialGradient id="mapGlow" cx="50%" cy="45%" r="60%">
                            <stop offset="0%" stop-color="#0878F9" stop-opacity="0.16" />
                            <stop offset="100%" stop-color="#020B1D" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                    <rect width="1000" height="480" fill="url(#mapGlow)" />

                    <!-- Kaliningrad -->
                    <path
                        d="M78 262 C70 256 68 270 78 276 C88 272 88 262 78 262 Z"
                        fill="#10294A"
                        stroke="rgba(50,149,255,.35)"
                        stroke-width="1.5"
                    />

                    <!-- Mainland Russia -->
                    <path
                        d="M168 208
                           C176 168 208 152 236 158
                           C258 138 286 148 304 136
                           C338 118 382 126 418 118
                           C468 92 522 108 568 92
                           C618 72 676 86 728 74
                           C786 58 848 78 902 92
                           C948 104 982 136 988 176
                           C992 214 968 236 948 252
                           C968 292 992 338 972 378
                           C948 402 922 368 906 330
                           C888 356 868 392 838 404
                           C798 384 762 402 722 392
                           C678 418 628 408 584 392
                           C538 416 490 398 448 388
                           C408 418 364 438 322 424
                           C292 448 258 428 238 402
                           C214 372 198 338 192 304
                           C176 268 168 236 168 208 Z"
                        fill="#10294A"
                        stroke="rgba(50,149,255,.45)"
                        stroke-width="1.6"
                    />

                    <!-- Sakhalin -->
                    <path
                        d="M912 348 C922 362 924 396 912 418 C898 404 898 368 912 348 Z"
                        fill="#10294A"
                        stroke="rgba(50,149,255,.35)"
                        stroke-width="1.5"
                    />

                    <g v-for="region in regions" :key="region.id">
                        <circle
                            :cx="region.x * 10"
                            :cy="region.y * 4.8"
                            :r="selectedId === region.id ? 18 : 13"
                            :fill="selectedId === region.id ? 'rgba(226,29,53,.18)' : 'rgba(8,120,249,.14)'"
                        />
                        <circle
                            :cx="region.x * 10"
                            :cy="region.y * 4.8"
                            :r="selectedId === region.id ? 7 : 5"
                            :fill="selectedId === region.id ? '#E21D35' : '#3295FF'"
                            class="cursor-pointer"
                            tabindex="0"
                            role="button"
                            :aria-label="region.name"
                            :aria-pressed="selectedId === region.id"
                            @click="selectRegion(region)"
                            @keydown.enter.prevent="selectRegion(region)"
                            @keydown.space.prevent="selectRegion(region)"
                        />
                    </g>
                </svg>
            </div>

            <div class="mt-4 flex flex-wrap gap-2">
                <button
                    v-for="region in regions"
                    :key="`${region.id}-chip`"
                    type="button"
                    class="label rounded-sm border px-3 py-2 transition duration-200"
                    :class="
                        selectedId === region.id
                            ? 'border-red-500 bg-red-500 text-white'
                            : 'border-white/10 text-white/65 hover:border-white/30 hover:text-white'
                    "
                    @click="selectRegion(region)"
                >
                    {{ region.shortName }}
                </button>
            </div>
        </div>

        <div class="space-y-4">
            <div class="card-dark p-5 md:p-6">
                <p class="label text-blue-400">Регион</p>
                <h3 class="font-display mt-2 text-[32px] font-semibold uppercase">{{ selected.shortName }}</h3>
                <dl class="mt-5 grid grid-cols-3 gap-3">
                    <div>
                        <dt class="label text-white/40">Клубов</dt>
                        <dd class="font-display mt-1 text-3xl font-semibold text-blue-400">{{ selected.clubs }}</dd>
                    </div>
                    <div>
                        <dt class="label text-white/40">Спортсменов</dt>
                        <dd class="font-display mt-1 text-3xl font-semibold">{{ selected.athletes.toLocaleString('ru-RU') }}</dd>
                    </div>
                    <div>
                        <dt class="label text-white/40">Тренеров</dt>
                        <dd class="font-display mt-1 text-3xl font-semibold">{{ selected.coaches }}</dd>
                    </div>
                </dl>
            </div>

            <div class="card-light p-5 md:p-6">
                <ClubCard :club="selectedClub" compact @enroll="emit('enroll')" />
            </div>
        </div>
    </div>
</template>
