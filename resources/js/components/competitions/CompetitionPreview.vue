<script setup lang="ts">
import { computed, ref } from 'vue';
import AppBadge from '@/components/ui/AppBadge.vue';
import AppTabs from '@/components/ui/AppTabs.vue';
import DemoHint from '@/components/ui/DemoHint.vue';
import type { Competition } from '@/types';

const props = defineProps<{
    competition: Competition;
}>();

const tabs = [
    { id: 'overview', label: 'Обзор' },
    { id: 'athletes', label: 'Участники' },
    { id: 'categories', label: 'Категории' },
    { id: 'schedule', label: 'Расписание' },
    { id: 'docs', label: 'Документы' },
    { id: 'results', label: 'Результаты' },
];

const active = ref('overview');

const participants = [
    { name: 'Иванов Иван', club: 'Витязь', city: 'Москва' },
    { name: 'Петров Алексей', club: 'Спарта', city: 'Санкт-Петербург' },
    { name: 'Сидоров Михаил', club: 'Олимп', city: 'Казань' },
    { name: 'Волков Дмитрий', club: 'Легион', city: 'Краснодар' },
];

const categories = ['67 кг · К1 · 14–15 лет', '71 кг · К1 · 14–15 лет', '60 кг · Low kick · 16–17 лет', '75 кг · К1 · 18+'];

const activeLabel = computed(() => tabs.find((tab) => tab.id === active.value)?.label ?? '');
</script>

<template>
    <div class="overflow-hidden rounded-lg border border-card-border bg-white shadow-card">
        <div class="relative overflow-hidden bg-navy-900 px-5 py-6 text-white md:px-8 md:py-8">
            <div class="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-white via-blue-500 to-red-500" />
            <div class="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <div class="flex flex-wrap items-center gap-2">
                        <AppBadge tone="white">Официальный старт</AppBadge>
                        <AppBadge v-if="competition.status === 'live'" tone="live">LIVE</AppBadge>
                    </div>
                    <h3 class="font-display mt-4 max-w-xl text-[32px] leading-none font-semibold uppercase md:text-[40px]">
                        {{ competition.title }}
                    </h3>
                    <p class="mt-3 text-white/60">{{ competition.city }} · {{ competition.dates }}</p>
                </div>
                <DemoHint tone="dark" />
            </div>
            <dl class="mt-6 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-3">
                <div>
                    <dt class="label text-white/40">Участники</dt>
                    <dd class="font-display mt-1 text-3xl">{{ competition.participants }}</dd>
                </div>
                <div>
                    <dt class="label text-white/40">Категории</dt>
                    <dd class="font-display mt-1 text-3xl">{{ competition.categories }}</dd>
                </div>
                <div>
                    <dt class="label text-white/40">Статус</dt>
                    <dd class="mt-2"><AppBadge tone="white">Результаты внесены</AppBadge></dd>
                </div>
            </dl>
        </div>

        <AppTabs v-model="active" :tabs="tabs" />

        <div class="p-5 md:p-8" :aria-label="activeLabel">
            <div v-if="active === 'overview'" class="max-w-2xl">
                <p class="text-lg leading-relaxed text-gray-600">{{ competition.overview }}</p>
                <p class="mt-4 text-ink">
                    Результат один раз попадает в систему и становится частью спортивной истории спортсмена.
                </p>
            </div>

            <ul v-else-if="active === 'athletes'" class="divide-y divide-gray-100">
                <li
                    v-for="person in participants"
                    :key="person.name"
                    class="flex flex-wrap items-center justify-between gap-2 py-3"
                >
                    <span class="font-medium">{{ person.name }}</span>
                    <span class="text-sm text-gray-600">«{{ person.club }}» · {{ person.city }}</span>
                </li>
            </ul>

            <ul v-else-if="active === 'categories'" class="grid gap-3 sm:grid-cols-2">
                <li
                    v-for="category in categories"
                    :key="category"
                    class="rounded-md border border-gray-200 px-4 py-3"
                >
                    {{ category }}
                </li>
            </ul>

            <ul v-else-if="active === 'schedule'" class="divide-y divide-gray-100">
                <li
                    v-for="item in competition.schedule"
                    :key="item.time"
                    class="grid grid-cols-[80px_1fr_auto] items-center gap-4 py-3"
                >
                    <span class="font-display text-lg">{{ item.time }}</span>
                    <span>{{ item.title }}</span>
                    <span class="text-sm text-gray-600">{{ item.place }}</span>
                </li>
            </ul>

            <ul v-else-if="active === 'docs'" class="grid gap-3 sm:grid-cols-2">
                <li
                    v-for="doc in competition.documents"
                    :key="doc"
                    class="rounded-md border border-gray-200 px-4 py-3"
                >
                    {{ doc }}
                </li>
            </ul>

            <div v-else class="space-y-3">
                <div
                    v-for="fight in competition.brackets"
                    :key="fight.id || fight.round"
                    class="grid items-center gap-3 rounded-md border border-gray-200 px-4 py-3 sm:grid-cols-[100px_1fr_auto]"
                >
                    <span class="label text-red-500">{{ fight.round }}</span>
                    <span>{{ fight.red }} — {{ fight.blue }}</span>
                    <span class="label text-blue-600">Победитель: {{ fight.result }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
