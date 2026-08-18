<script setup lang="ts">
import { MapPin, Users, UserRound } from '@lucide/vue';
import AppButton from '@/components/ui/AppButton.vue';
import type { Club } from '@/types';

defineProps<{
    club: Club;
    compact?: boolean;
}>();

const emit = defineEmits<{
    enroll: [];
}>();
</script>

<template>
    <article
        class="flex h-full flex-col"
        :class="compact ? '' : 'card-light p-5 md:p-6'"
    >
        <p class="label text-blue-500">Клуб</p>
        <h3 class="font-display mt-2 text-[28px] font-semibold uppercase">«{{ club.name }}»</h3>
        <p class="mt-2 flex items-center gap-1.5 text-sm text-gray-600">
            <MapPin class="size-4" :stroke-width="1.75" aria-hidden="true" />
            {{ club.city }}
        </p>

        <dl class="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div class="rounded-md bg-gray-50 px-3 py-3">
                <dt class="label text-gray-400">Тренеры</dt>
                <dd class="mt-1 flex items-center gap-1.5 font-medium">
                    <UserRound class="size-3.5" :stroke-width="1.75" aria-hidden="true" />
                    {{ club.coaches }}
                </dd>
            </div>
            <div class="rounded-md bg-gray-50 px-3 py-3">
                <dt class="label text-gray-400">Спортсмены</dt>
                <dd class="mt-1 flex items-center gap-1.5 font-medium">
                    <Users class="size-3.5" :stroke-width="1.75" aria-hidden="true" />
                    {{ club.athletes }}
                </dd>
            </div>
        </dl>

        <div class="mt-4">
            <p class="label text-gray-400">Возрастные группы</p>
            <p class="mt-1 text-sm">{{ club.ageGroups.join(' · ') }}</p>
        </div>
        <div class="mt-3">
            <p class="label text-gray-400">Направления</p>
            <p class="mt-1 text-sm">{{ club.directions.join(' · ') }}</p>
        </div>
        <div class="mt-3">
            <p class="label text-gray-400">Контакты</p>
            <p class="mt-1 text-sm">{{ club.address }}</p>
            <p class="text-sm text-gray-600">{{ club.phone }}</p>
        </div>

        <div class="mt-6">
            <AppButton block @click="emit('enroll')">Записаться</AppButton>
        </div>
    </article>
</template>
