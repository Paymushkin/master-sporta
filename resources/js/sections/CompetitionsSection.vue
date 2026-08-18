<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';
import CompetitionPreview from '@/components/competitions/CompetitionPreview.vue';
import AppContainer from '@/components/ui/AppContainer.vue';
import AppSection from '@/components/ui/AppSection.vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import { competitionFlow, featuredCompetition } from '@/data/competitions';
</script>

<template>
    <AppSection id="competitions" theme="light">
        <AppContainer>
            <SectionHeader
                title="Каждое соревнование —<br>часть цифровой системы"
                description="Результат один раз попадает в систему и становится частью спортивной истории спортсмена."
            />

            <ol class="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2">
                <li
                    v-for="(item, index) in competitionFlow"
                    :key="item"
                    class="flex items-center gap-3"
                >
                    <span class="label text-ink">{{ item }}</span>
                    <ArrowRight
                        v-if="index < competitionFlow.length - 1"
                        class="size-4 text-gray-400"
                        :stroke-width="1.75"
                        aria-hidden="true"
                    />
                </li>
            </ol>

            <div class="mt-12 md:mt-16">
                <CompetitionPreview :competition="featuredCompetition" />
            </div>
        </AppContainer>
    </AppSection>
</template>
