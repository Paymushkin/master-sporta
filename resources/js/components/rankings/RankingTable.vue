<script setup lang="ts">
import { TrendingDown, TrendingUp } from '@lucide/vue';
import DemoHint from '@/components/ui/DemoHint.vue';
import type { RankingRow } from '@/types';

defineProps<{
    rows: RankingRow[];
    highlightId?: string;
}>();
</script>

<template>
    <div class="overflow-hidden rounded-lg border border-white/8 bg-navy-800">
        <div class="flex items-center justify-between px-5 py-4">
            <p class="label text-white/40">Таблица рейтинга</p>
            <DemoHint tone="dark" />
        </div>
        <div class="overflow-x-auto">
            <table class="w-full min-w-[520px] text-left">
                <thead>
                    <tr class="label text-white/35">
                        <th class="px-5 py-3 font-semibold">Место</th>
                        <th class="px-5 py-3 font-semibold">Спортсмен</th>
                        <th class="px-5 py-3 font-semibold">Клуб</th>
                        <th class="px-5 py-3 text-right font-semibold">Очки</th>
                        <th class="px-5 py-3 text-right font-semibold">Динамика</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="row in rows"
                        :key="row.athleteId"
                        class="border-t border-white/8 transition duration-200"
                        :class="
                            highlightId === row.athleteId
                                ? 'bg-blue-500/10'
                                : 'hover:bg-white/4'
                        "
                    >
                        <td class="px-5 py-4">
                            <span class="font-display text-2xl font-semibold" :class="row.position === 1 ? 'text-red-400' : 'text-white'">
                                {{ String(row.position).padStart(2, '0') }}
                            </span>
                        </td>
                        <td class="px-5 py-4 font-medium">{{ row.name }}</td>
                        <td class="px-5 py-4 text-white/55">«{{ row.club }}»</td>
                        <td class="px-5 py-4 text-right font-display text-xl text-blue-400">{{ row.points }}</td>
                        <td class="px-5 py-4">
                            <span class="flex items-center justify-end gap-1 text-sm" :class="row.trend > 0 ? 'text-blue-400' : 'text-white/40'">
                                <TrendingUp v-if="row.trend > 0" class="size-4" :stroke-width="1.75" aria-hidden="true" />
                                <TrendingDown v-else class="size-4" :stroke-width="1.75" aria-hidden="true" />
                                {{ row.trend > 0 ? `+${row.trend}` : row.trend }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
