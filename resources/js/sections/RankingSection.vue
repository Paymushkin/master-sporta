<script setup lang="ts">
import RankingTable from '@/components/rankings/RankingTable.vue';
import AppBadge from '@/components/ui/AppBadge.vue';
import AppContainer from '@/components/ui/AppContainer.vue';
import AppFilter from '@/components/ui/AppFilter.vue';
import AppSection from '@/components/ui/AppSection.vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import SportStripe from '@/components/ui/SportStripe.vue';
import { featuredAthlete } from '@/data/athletes';
import { rankingFilters, rankingRows } from '@/data/rankings';
import { ref } from 'vue';

const country = ref(rankingFilters.country);
const weight = ref(rankingFilters.weight);
const discipline = ref(rankingFilters.discipline);
const ageGroup = ref(rankingFilters.ageGroup);
const season = ref(rankingFilters.season);
</script>

<template>
    <AppSection id="rankings" theme="dark">
        <SportStripe side="left" size="sm" />
        <AppContainer>
            <SectionHeader
                tone="dark"
                title="Понятная система<br>спортивного прогресса"
                description="Каждый официальный результат становится частью спортивной истории."
            />

            <div class="mt-10 flex flex-wrap gap-2">
                <AppFilter v-model="country" name="Страна" tone="dark" :options="['Россия']" />
                <AppFilter v-model="weight" name="Вес" tone="dark" :options="['60 кг', '67 кг', '71 кг']" />
                <AppFilter v-model="discipline" name="Дисциплина" tone="dark" :options="['К1', 'Low kick', 'Full contact']" />
                <AppFilter v-model="ageGroup" name="Возраст" tone="dark" :options="['14–15 лет', '16–17 лет', '18+']" />
                <AppFilter v-model="season" name="Сезон" tone="dark" :options="['Сезон 2026', 'Сезон 2025']" />
            </div>

            <div class="mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.8fr)]">
                <RankingTable :rows="rankingRows" :highlight-id="featuredAthlete.id" />

                <aside class="card-dark p-5 md:p-6">
                    <p class="label text-white/40">Прогресс спортсмена</p>
                    <p class="font-display mt-3 text-3xl uppercase">{{ featuredAthlete.shortName }}</p>
                    <p class="mt-4 font-display text-2xl text-blue-400">
                        {{ featuredAthlete.ratingHistory.map((item) => `#${item}`).join(' → ') }}
                    </p>
                    <div class="mt-6 flex flex-wrap gap-2">
                        <AppBadge
                            v-for="item in featuredAthlete.achievements"
                            :key="item"
                            :tone="item === 'Чемпион' || item === 'Сборная' ? 'red' : 'white'"
                        >
                            {{ item }}
                        </AppBadge>
                    </div>
                    <p class="mt-6 text-sm text-white/55">
                        Рейтинг обновляется после каждого официального старта. История изменений сохраняется в профиле.
                    </p>
                </aside>
            </div>
        </AppContainer>
    </AppSection>
</template>
