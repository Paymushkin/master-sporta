<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';
import ClubsMap from '@/components/clubs/ClubsMap.vue';
import AppContainer from '@/components/ui/AppContainer.vue';
import AppSection from '@/components/ui/AppSection.vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import { clubSearchSteps } from '@/data/clubs';

const emit = defineEmits<{
    enroll: [];
}>();
</script>

<template>
    <AppSection id="clubs" theme="muted">
        <AppContainer>
            <SectionHeader
                title="Кикбоксинг становится<br>видимым по всей стране"
                description="Клубы, тренеры и набор в секции собираются на одной карте. Семья может найти клуб рядом, выбрать направление и записаться."
            />

            <div class="mt-12 md:mt-16">
                <ClubsMap @enroll="emit('enroll')" />
            </div>

            <ol class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <li
                    v-for="(step, index) in clubSearchSteps"
                    :key="step"
                    class="flex items-center gap-3"
                >
                    <span class="font-display text-2xl text-blue-600">{{ String(index + 1).padStart(2, '0') }}</span>
                    <span class="font-display text-xl uppercase">{{ step }}</span>
                    <ArrowRight
                        v-if="index < clubSearchSteps.length - 1"
                        class="hidden size-4 text-gray-400 sm:block"
                        :stroke-width="1.75"
                        aria-hidden="true"
                    />
                </li>
            </ol>
        </AppContainer>
    </AppSection>
</template>
