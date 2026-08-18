<script setup lang="ts">
import AppContainer from '@/components/ui/AppContainer.vue';
import AppSection from '@/components/ui/AppSection.vue';
import SportStripe from '@/components/ui/SportStripe.vue';
import { coreEntities, sportDirections } from '@/data/platform';

const orbit = coreEntities.map((item, index) => {
    const angle = (index / coreEntities.length) * Math.PI * 2 - Math.PI / 2;
    return {
        ...item,
        x: 50 + Math.cos(angle) * 42,
        y: 50 + Math.sin(angle) * 38,
    };
});
</script>

<template>
    <AppSection theme="dark" class="min-h-[80vh]">
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,120,249,.16),transparent_58%)]" />
        <SportStripe side="left" />
        <SportStripe side="right" />
        <AppContainer>
            <div class="mx-auto max-w-3xl text-center">
                <h2 class="heading-2 text-balance">Кикбоксинг —<br>первая точка запуска</h2>
                <p class="body-lg mx-auto mt-8 max-w-2xl text-white/70">
                    Одна технологическая платформа. Множество спортивных федераций.
                </p>
            </div>

            <div class="relative mx-auto mt-16 max-w-4xl md:mt-20">
                <div class="relative mx-auto flex min-h-[360px] items-center justify-center md:min-h-[560px]">
                    <div class="absolute size-[240px] rounded-full border border-white/8 md:size-[380px]" />
                    <div class="absolute size-[170px] rounded-full border border-blue-500/20 md:size-[260px]" />
                    <div class="relative z-10 max-w-[200px] rounded-lg border border-white/10 bg-navy-900 px-5 py-6 text-center shadow-card md:max-w-[260px] md:px-8 md:py-9">
                        <p class="label text-blue-400">Единое технологическое ядро</p>
                        <p class="font-display mt-3 text-3xl uppercase md:text-5xl">Мастер<br>Спорта</p>
                    </div>

                    <ul class="pointer-events-none absolute inset-0 hidden md:block">
                        <li
                            v-for="item in orbit"
                            :key="item.id"
                            class="label absolute rounded-sm border border-white/10 bg-navy-900 px-3 py-2 text-white/80"
                            :style="{ left: `${item.x}%`, top: `${item.y}%`, transform: 'translate(-50%, -50%)' }"
                        >
                            {{ item.label }}
                        </li>
                    </ul>
                </div>

                <ul class="mt-2 flex flex-wrap justify-center gap-2 md:hidden">
                    <li
                        v-for="item in coreEntities"
                        :key="item.id"
                        class="label rounded-sm border border-white/10 bg-navy-900 px-3 py-2 text-white/80"
                    >
                        {{ item.label }}
                    </li>
                </ul>

                <ul class="mt-8 flex flex-wrap justify-center gap-3">
                    <li
                        v-for="sport in sportDirections"
                        :key="sport.id"
                        class="font-display rounded-sm border px-4 py-3 text-lg uppercase"
                        :class="
                            sport.id === 'kickboxing'
                                ? 'border-red-500 bg-red-500 text-white'
                                : 'border-white/10 text-white/70'
                        "
                    >
                        {{ sport.label }}
                    </li>
                </ul>
            </div>

            <p class="mx-auto mt-12 max-w-2xl text-center text-white/60">
                Федерация кикбоксинга России может стать первой федерацией, на базе которой будет создан новый цифровой стандарт.
            </p>
        </AppContainer>
    </AppSection>
</template>
