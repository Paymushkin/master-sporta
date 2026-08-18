<script setup lang="ts">
import DashboardCard from '@/components/analytics/DashboardCard.vue';
import StatCard from '@/components/analytics/StatCard.vue';
import {
    ageGroups,
    athletesByYear,
    clubDistribution,
    federationKpis,
    recentFederationEvents,
    regionActivity,
} from '@/data/federationStats';
import { regions } from '@/data/clubs';

const maxYear = Math.max(...athletesByYear.map((item) => item.value));
const maxAge = Math.max(...ageGroups.map((item) => item.value));
const maxClub = Math.max(...clubDistribution.map((item) => item.value));
const linePoints = athletesByYear
    .map((item, index) => {
        const x = (index / (athletesByYear.length - 1)) * 100;
        const y = 86 - (item.value / maxYear) * 70;
        return `${x},${y}`;
    })
    .join(' ');

const formatKpi = (value: number) => value.toLocaleString('ru-RU');
</script>

<template>
    <div class="overflow-hidden rounded-lg border border-white/8 bg-navy-900 p-4 md:p-6">
        <div class="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
                <p class="label text-blue-400">Кабинет Федерации</p>
                <h3 class="font-display mt-2 text-2xl uppercase md:text-3xl">Аналитика российского кикбоксинга</h3>
            </div>
            <p class="demo-tag">Все показатели являются демонстрационными</p>
        </div>

        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <StatCard
                v-for="(kpi, index) in federationKpis"
                :key="kpi.label"
                :value="formatKpi(kpi.value)"
                :label="kpi.label"
                :accent="index === 0"
            />
        </div>

        <div class="mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr_0.9fr]">
            <DashboardCard title="Карта активности регионов">
                <svg viewBox="0 0 1000 420" class="h-auto w-full" aria-hidden="true">
                    <path
                        d="M168 188 C176 148 208 132 236 138 C258 118 286 128 304 116 C338 98 382 106 418 98 C468 72 522 88 568 72 C618 52 676 66 728 54 C786 38 848 58 902 72 C948 84 982 116 988 156 C992 194 968 216 948 232 C968 272 992 318 972 358 C948 382 922 348 906 310 C888 336 868 372 838 384 C798 364 762 382 722 372 C678 398 628 388 584 372 C538 396 490 378 448 368 C408 398 364 418 322 404 C292 428 258 408 238 382 C214 352 198 318 192 284 C176 248 168 216 168 188 Z"
                        fill="#0A1B35"
                        stroke="rgba(50,149,255,.4)"
                        stroke-width="1.5"
                    />
                    <circle
                        v-for="region in regions"
                        :key="region.id"
                        :cx="region.x * 10"
                        :cy="region.y * 4.2"
                        :r="6 + region.athletes / 1800"
                        fill="rgba(8,120,249,.35)"
                        stroke="#3295FF"
                        stroke-width="1"
                    />
                </svg>
            </DashboardCard>

            <DashboardCard title="Динамика спортсменов" hint="2021–2026">
                <svg viewBox="0 0 100 100" class="h-44 w-full" preserveAspectRatio="none" aria-hidden="true">
                    <polyline :points="linePoints" fill="none" stroke="#3295FF" stroke-width="1.8" />
                    <polygon :points="`0,100 ${linePoints} 100,100`" fill="rgba(8,120,249,.12)" />
                </svg>
                <div class="mt-3 flex justify-between text-xs text-white/40">
                    <span v-for="item in athletesByYear" :key="item.year">{{ item.year }}</span>
                </div>
            </DashboardCard>

            <DashboardCard title="Возрастные группы">
                <ul class="space-y-3">
                    <li v-for="group in ageGroups" :key="group.label">
                        <div class="mb-1 flex justify-between text-sm">
                            <span>{{ group.label }}</span>
                            <span class="text-blue-400">{{ group.value }}%</span>
                        </div>
                        <div class="h-1.5 overflow-hidden rounded-xs bg-white/8">
                            <div
                                class="h-full rounded-xs bg-blue-500"
                                :style="{ width: `${(group.value / maxAge) * 100}%` }"
                            />
                        </div>
                    </li>
                </ul>
            </DashboardCard>
        </div>

        <div class="mt-4 grid gap-4 lg:grid-cols-2">
            <DashboardCard title="Распределение клубов">
                <ul class="space-y-3">
                    <li v-for="item in clubDistribution" :key="item.label" class="flex items-center gap-3">
                        <span class="label w-12 text-white/45">{{ item.label }}</span>
                        <div class="h-2 flex-1 overflow-hidden rounded-xs bg-white/8">
                            <div
                                class="h-full rounded-xs bg-blue-400"
                                :style="{ width: `${(item.value / maxClub) * 100}%` }"
                            />
                        </div>
                        <span class="w-10 text-right text-sm">{{ item.value }}%</span>
                    </li>
                </ul>
            </DashboardCard>

            <DashboardCard title="Активность регионов">
                <div class="overflow-x-auto">
                    <table class="w-full min-w-[360px] text-left text-sm">
                        <thead>
                            <tr class="label text-white/35">
                                <th class="pb-3 font-semibold">Регион</th>
                                <th class="pb-3 font-semibold">Клубы</th>
                                <th class="pb-3 font-semibold">Спортсмены</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="item in regionActivity"
                                :key="item.name"
                                class="border-t border-white/8"
                            >
                                <td class="py-2.5">{{ item.name }}</td>
                                <td class="py-2.5 text-white/60">{{ item.clubs }}</td>
                                <td class="py-2.5 text-blue-400">{{ item.athletes.toLocaleString('ru-RU') }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DashboardCard>
        </div>

        <DashboardCard title="Соревнования" class="mt-4">
            <ul class="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                <li
                    v-for="event in recentFederationEvents"
                    :key="event.name"
                    class="rounded-md border border-white/8 bg-navy-900 px-4 py-4"
                >
                    <p class="label" :class="event.status === 'Итоги' ? 'text-blue-400' : 'text-red-400'">
                        {{ event.status }}
                    </p>
                    <p class="mt-2 font-medium">{{ event.name }}</p>
                    <p class="mt-1 text-sm text-white/45">{{ event.city }} · {{ event.date }}</p>
                </li>
            </ul>
        </DashboardCard>
    </div>
</template>
