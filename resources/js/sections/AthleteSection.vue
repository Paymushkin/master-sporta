<script setup lang="ts">
import AthleteProfilePreview from '@/components/athletes/AthleteProfilePreview.vue';
import AppContainer from '@/components/ui/AppContainer.vue';
import AppSection from '@/components/ui/AppSection.vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import { featuredAthlete } from '@/data/athletes';
</script>

<template>
    <AppSection id="athletes" theme="light">
        <AppContainer>
            <div class="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-16">
                <SectionHeader
                    title="Вся спортивная история<br>в одном профиле"
                    description="Профиль спортсмена собирает разряд, бои, результаты, тренера, клуб и динамику рейтинга. История карьеры больше не теряется между протоколами."
                />
                <AthleteProfilePreview :athlete="featuredAthlete" />
            </div>
        </AppContainer>
    </AppSection>
</template>
