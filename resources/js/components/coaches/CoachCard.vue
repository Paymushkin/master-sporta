<script setup lang="ts">
import AppAvatar from '@/components/ui/AppAvatar.vue';
import type { Coach } from '@/types';

defineProps<{
    coach: Coach;
    compact?: boolean;
}>();
</script>

<template>
    <article
        :class="compact ? 'p-4' : 'card-light p-5'"
        class="transition duration-200"
    >
        <div class="flex items-start gap-3">
            <AppAvatar :initials="coach.initials" size="md" :alt="coach.name" />
            <div class="min-w-0">
                <p class="label text-blue-500">Тренер</p>
                <h3 class="font-display mt-1 text-xl font-semibold uppercase">{{ coach.name }}</h3>
                <p class="mt-1 text-sm text-gray-600">
                    Клуб «{{ coach.club }}» · {{ coach.city }}
                </p>
            </div>
        </div>
        <dl class="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div>
                <dt class="label text-gray-400">Стаж</dt>
                <dd class="mt-1 font-medium">{{ coach.experience }}</dd>
            </div>
            <div>
                <dt class="label text-gray-400">Спортсмены</dt>
                <dd class="mt-1 font-medium">{{ coach.athletes }}</dd>
            </div>
        </dl>
        <p class="mt-4 text-sm text-gray-600">{{ coach.directions.join(' · ') }}</p>
    </article>
</template>
