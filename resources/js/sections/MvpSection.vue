<script setup lang="ts">
import AppContainer from '@/components/ui/AppContainer.vue';
import AppSection from '@/components/ui/AppSection.vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import { mvpItems } from '@/data/platform';
</script>

<template>
    <AppSection theme="light">
        <AppContainer>
            <p class="label text-red-500">Первый этап</p>
            <SectionHeader
                class="mt-4"
                title="Не нужно создавать<br>всю экосистему сразу"
                description="Создаём единый цифровой фундамент для дальнейшего развития платформы."
            />

            <ol class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
                <li
                    v-for="item in mvpItems"
                    :key="item.id"
                    class="border-t border-gray-200 pt-5"
                >
                    <span class="font-display text-3xl text-blue-600">{{ item.id }}</span>
                    <h3 class="font-display mt-3 text-2xl font-semibold uppercase">{{ item.title }}</h3>
                </li>
            </ol>
        </AppContainer>
    </AppSection>
</template>
