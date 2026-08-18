<script setup lang="ts">
import AppBadge from '@/components/ui/AppBadge.vue';
import type { Competition } from '@/types';

defineProps<{
    competition: Competition;
}>();
</script>

<template>
    <article class="card-light p-5">
        <AppBadge :tone="competition.status === 'live' ? 'live' : 'muted'">
            {{ competition.status === 'live' ? 'LIVE' : competition.city }}
        </AppBadge>
        <h3 class="font-display mt-3 text-2xl font-semibold uppercase">{{ competition.title }}</h3>
        <p class="mt-2 text-sm text-gray-600">{{ competition.city }} · {{ competition.dates }}</p>
        <p class="mt-4 text-sm">{{ competition.participants }} участников · {{ competition.categories }} категорий</p>
    </article>
</template>
