<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import HeroSection from '@/sections/HeroSection.vue';
import HomeIntroSection from '@/sections/HomeIntroSection.vue';

defineOptions({
    layout: false,
});
</script>

<template>
    <Head title="Цифровая платформа российского кикбоксинга" />
    <AppLayout>
        <HeroSection />
        <HomeIntroSection />
    </AppLayout>
</template>
