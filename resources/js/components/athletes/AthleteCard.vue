<script setup lang="ts">
import AppAvatar from '@/components/ui/AppAvatar.vue';
import AppBadge from '@/components/ui/AppBadge.vue';
import type { Athlete } from '@/types';

defineProps<{
    athlete: Athlete;
}>();
</script>

<template>
    <article class="card-light p-5 transition duration-200 hover:-translate-y-0.5">
        <div class="flex items-start gap-4">
            <AppAvatar :initials="athlete.initials" :alt="`${athlete.lastName} ${athlete.firstName}`" />
            <div class="min-w-0">
                <p class="font-display text-xl font-semibold uppercase">
                    {{ athlete.lastName }} {{ athlete.firstName }}
                </p>
                <p class="mt-1 text-sm text-gray-600">
                    {{ athlete.ageGroup }} · {{ athlete.weight }} · {{ athlete.discipline }}
                </p>
                <p class="mt-1 text-sm text-gray-600">Клуб «{{ athlete.club }}»</p>
            </div>
        </div>
        <div class="mt-5 flex flex-wrap gap-2">
            <AppBadge tone="muted">#{{ athlete.nationalRank }} Россия</AppBadge>
            <AppBadge tone="muted">{{ athlete.rank }}</AppBadge>
            <AppBadge tone="muted">{{ athlete.wins }} побед</AppBadge>
        </div>
    </article>
</template>
