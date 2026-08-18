<script setup lang="ts">
import { ArrowDown } from '@lucide/vue';
import AthleteCard from '@/components/athletes/AthleteCard.vue';
import ClubCard from '@/components/clubs/ClubCard.vue';
import CoachCard from '@/components/coaches/CoachCard.vue';
import AppContainer from '@/components/ui/AppContainer.vue';
import AppSection from '@/components/ui/AppSection.vue';
import PhoneFrame from '@/components/ui/PhoneFrame.vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import { featuredAthlete } from '@/data/athletes';
import { featuredClub } from '@/data/clubs';
import { featuredCoach } from '@/data/coaches';
import { audienceJourney } from '@/data/platform';

const emit = defineEmits<{
    enroll: [];
}>();
</script>

<template>
    <AppSection id="coaches" theme="light">
        <AppContainer>
            <SectionHeader
                title="Платформа открывает<br>кикбоксинг новой аудитории"
                description="Цифровая платформа становится новым каналом привлечения людей в спорт."
            />

            <div class="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
                <ol class="space-y-2">
                    <li
                        v-for="(step, index) in audienceJourney"
                        :key="step"
                        class="flex flex-col"
                    >
                        <div class="flex items-center gap-4">
                            <span class="font-display text-4xl text-blue-600">
                                {{ String(index + 1).padStart(2, '0') }}
                            </span>
                            <span class="font-display text-2xl uppercase md:text-3xl">{{ step }}</span>
                        </div>
                        <ArrowDown
                            v-if="index < audienceJourney.length - 1"
                            class="ml-3 my-2 size-4 text-gray-400"
                            :stroke-width="1.75"
                            aria-hidden="true"
                        />
                    </li>
                </ol>

                <div class="flex gap-4 overflow-x-auto pb-4 scrollbar-none lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
                    <PhoneFrame>
                        <div class="p-4">
                            <AthleteCard :athlete="featuredAthlete" />
                        </div>
                    </PhoneFrame>
                    <PhoneFrame>
                        <div class="p-4">
                            <CoachCard :coach="featuredCoach" compact />
                        </div>
                    </PhoneFrame>
                    <PhoneFrame>
                        <div class="p-3">
                            <ClubCard :club="featuredClub" compact @enroll="emit('enroll')" />
                        </div>
                    </PhoneFrame>
                </div>
            </div>
        </AppContainer>
    </AppSection>
</template>
