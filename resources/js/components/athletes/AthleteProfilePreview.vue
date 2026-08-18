<script setup lang="ts">
import { computed } from 'vue';
import AppAvatar from '@/components/ui/AppAvatar.vue';
import AppBadge from '@/components/ui/AppBadge.vue';
import DemoHint from '@/components/ui/DemoHint.vue';
import type { Athlete } from '@/types';

const props = defineProps<{
    athlete: Athlete;
}>();

const stats = computed(() => [
    { label: 'Боёв', value: String(props.athlete.fights) },
    { label: 'Побед', value: String(props.athlete.wins) },
    { label: 'Разряд', value: props.athlete.rank },
    { label: 'Категория', value: `${props.athlete.categoryRank} место` },
]);

const sparkPoints = computed(() => {
    const history = [...props.athlete.ratingHistory].reverse();
    const max = Math.max(...history);
    const min = Math.min(...history);
    return history
        .map((rank, index) => {
            const x = (index / (history.length - 1)) * 100;
            const y = 8 + ((rank - min) / (max - min || 1)) * 28;
            return `${x},${y}`;
        })
        .join(' ');
});
</script>

<template>
    <div class="relative overflow-hidden rounded-lg border border-white/8 bg-navy-900 shadow-card">
        <div class="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-white via-blue-500 to-red-500" />
        <div class="flex items-center justify-between px-5 pt-5 md:px-6">
            <p class="label text-white/40">Профиль спортсмена</p>
            <DemoHint tone="dark" />
        </div>

        <div class="grid gap-6 p-5 md:grid-cols-[auto_1fr] md:p-6">
            <AppAvatar
                :initials="athlete.initials"
                size="xl"
                accent="red"
                :alt="`${athlete.lastName} ${athlete.firstName}`"
            />

            <div class="min-w-0">
                <div class="flex flex-wrap items-start justify-between gap-3">
                    <div>
                        <h3 class="font-display text-[32px] leading-none font-semibold uppercase md:text-[36px]">
                            {{ athlete.lastName }}
                            <span class="block text-white/80">{{ athlete.firstName }}</span>
                        </h3>
                        <p class="mt-3 text-sm text-white/60">
                            {{ athlete.ageGroup }} · {{ athlete.weight }} · {{ athlete.discipline }}
                        </p>
                    </div>
                    <div class="rounded-md border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-right">
                        <p class="font-display text-3xl leading-none font-semibold text-blue-400">
                            #{{ athlete.nationalRank }}
                        </p>
                        <p class="label mt-1 text-white/50">Россия</p>
                    </div>
                </div>

                <dl class="mt-5 grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
                    <div class="rounded-md border border-white/8 bg-navy-800 px-3 py-3">
                        <dt class="label text-white/40">Клуб</dt>
                        <dd class="mt-1 font-medium">«{{ athlete.club }}»</dd>
                    </div>
                    <div class="rounded-md border border-white/8 bg-navy-800 px-3 py-3">
                        <dt class="label text-white/40">Тренер</dt>
                        <dd class="mt-1 font-medium">{{ athlete.coach }}</dd>
                    </div>
                    <div class="rounded-md border border-white/8 bg-navy-800 px-3 py-3">
                        <dt class="label text-white/40">Город</dt>
                        <dd class="mt-1 font-medium">{{ athlete.clubCity }}</dd>
                    </div>
                    <div class="rounded-md border border-white/8 bg-navy-800 px-3 py-3">
                        <dt class="label text-white/40">Очки</dt>
                        <dd class="mt-1 font-medium text-blue-400">{{ athlete.points }}</dd>
                    </div>
                </dl>
            </div>
        </div>

        <div class="grid gap-3 px-5 md:grid-cols-4 md:px-6">
            <div
                v-for="stat in stats"
                :key="stat.label"
                class="rounded-md border border-white/8 bg-navy-800 px-4 py-4"
            >
                <p class="label text-white/40">{{ stat.label }}</p>
                <p class="font-display mt-2 text-2xl font-semibold">{{ stat.value }}</p>
            </div>
        </div>

        <div class="mt-5 grid gap-5 px-5 pb-6 md:grid-cols-[1.1fr_0.9fr] md:px-6">
            <div class="rounded-md border border-white/8 bg-navy-800 p-4">
                <div class="flex items-center justify-between gap-3">
                    <p class="label text-white/40">Динамика рейтинга</p>
                    <p class="font-display text-lg font-semibold text-blue-400">
                        {{ athlete.ratingHistory.map((item) => `#${item}`).join(' → ') }}
                    </p>
                </div>
                <svg viewBox="0 0 100 44" class="mt-4 h-16 w-full overflow-visible" aria-hidden="true">
                    <polyline
                        :points="sparkPoints"
                        fill="none"
                        stroke="#3295FF"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                    />
                    <circle
                        v-for="(point, index) in sparkPoints.split(' ')"
                        :key="index"
                        :cx="point.split(',')[0]"
                        :cy="point.split(',')[1]"
                        r="1.8"
                        fill="#FFFFFF"
                    />
                </svg>
            </div>

            <div class="rounded-md border border-white/8 bg-navy-800 p-4">
                <p class="label text-white/40">Достижения</p>
                <div class="mt-3 flex flex-wrap gap-2">
                    <AppBadge
                        v-for="item in athlete.achievements"
                        :key="item"
                        :tone="item === 'Чемпион' || item === 'Сборная' ? 'red' : 'white'"
                    >
                        {{ item }}
                    </AppBadge>
                </div>
            </div>
        </div>

        <div class="border-t border-white/8 px-5 py-5 md:px-6">
            <p class="label text-white/40">Последние соревнования</p>
            <ul class="mt-3 divide-y divide-white/8">
                <li
                    v-for="result in athlete.recentResults"
                    :key="result.name"
                    class="flex items-center justify-between gap-4 py-3"
                >
                    <div>
                        <p class="font-medium">{{ result.name }}</p>
                        <p class="text-sm text-white/45">{{ result.city }} · {{ result.date }}</p>
                    </div>
                    <span class="label text-blue-400">{{ result.place }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
