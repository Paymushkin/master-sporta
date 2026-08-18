<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue';
import AppContainer from '@/components/ui/AppContainer.vue';
import { publicUrl } from '@/lib/publicUrl';
</script>

<template>
    <section class="relative isolate overflow-hidden bg-navy-950 text-white">
        <img
            :src="publicUrl('images/hero-bg.jpg')"
            alt=""
            class="absolute inset-0 h-full w-full object-cover object-right opacity-40"
            loading="lazy"
            width="2400"
            height="1280"
        />
        <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,11,29,.94)_0%,rgba(2,11,29,.78)_55%,rgba(2,11,29,.45)_100%)]" />
        <AppContainer class="relative py-24 md:py-32">
            <div class="max-w-xl">
                <h2 class="heading-2">Найди кикбоксинг<br>рядом с собой</h2>
                <p class="body-lg mt-6 text-white/75">
                    Найдите клуб, познакомьтесь с тренерами и выберите подходящее направление.
                </p>
                <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                    <AppButton href="#clubs" class="w-full sm:w-auto">Найти клуб</AppButton>
                    <AppButton href="#clubs" variant="secondary-dark" class="w-full sm:w-auto">Посмотреть карту</AppButton>
                </div>
            </div>
        </AppContainer>
    </section>
</template>
