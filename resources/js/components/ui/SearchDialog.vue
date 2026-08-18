<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRef, watch } from 'vue';
import { Search, X } from '@lucide/vue';
import { athletes } from '@/data/athletes';
import { clubs } from '@/data/clubs';
import { useBodyScrollLock } from '@/composables/useBodyScrollLock';

const props = defineProps<{
    open: boolean;
}>();

const emit = defineEmits<{
    close: [];
}>();

const query = ref('');
const input = ref<HTMLInputElement | null>(null);

useBodyScrollLock(toRef(props, 'open'));

const athleteHits = () => {
    const value = query.value.trim().toLowerCase();
    if (!value) {
        return athletes.slice(0, 3);
    }

    return athletes.filter((athlete) =>
        `${athlete.lastName} ${athlete.firstName} ${athlete.club}`.toLowerCase().includes(value),
    ).slice(0, 5);
};

const clubHits = () => {
    const value = query.value.trim().toLowerCase();
    if (!value) {
        return clubs.slice(0, 3);
    }

    return clubs.filter((club) =>
        `${club.name} ${club.city}`.toLowerCase().includes(value),
    ).slice(0, 5);
};

watch(
    () => props.open,
    async (open) => {
        if (open) {
            query.value = '';
            setTimeout(() => input.value?.focus(), 40);
        }
    },
);

const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && props.open) {
        emit('close');
    }
};

onMounted(() => window.addEventListener('keydown', onKeydown));
onUnmounted(() => window.removeEventListener('keydown', onKeydown));
</script>

<template>
    <Teleport to="body">
        <div
            v-if="open"
            class="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-24"
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-title"
        >
            <button type="button" class="absolute inset-0 bg-navy-950/60" aria-label="Закрыть поиск" @click="emit('close')" />
            <div class="relative w-full max-w-xl overflow-hidden rounded-lg bg-white shadow-card">
                <div class="flex items-center gap-3 border-b border-gray-200 px-4">
                    <Search class="size-5 text-gray-400" :stroke-width="1.75" aria-hidden="true" />
                    <input
                        id="search-title"
                        ref="input"
                        v-model="query"
                        type="search"
                        class="h-14 w-full bg-transparent text-base outline-none"
                        placeholder="Найти спортсмена, клуб или регион"
                        autocomplete="off"
                    >
                    <button
                        type="button"
                        class="inline-flex size-10 items-center justify-center rounded-sm"
                        aria-label="Закрыть"
                        @click="emit('close')"
                    >
                        <X class="size-4" :stroke-width="1.75" />
                    </button>
                </div>
                <div class="max-h-[360px] overflow-y-auto p-4">
                    <p class="label text-gray-400">Спортсмены</p>
                    <ul class="mt-2 space-y-1">
                        <li v-for="athlete in athleteHits()" :key="athlete.id">
                            <a
                                href="#athletes"
                                class="flex items-center justify-between rounded-sm px-2 py-2 text-sm hover:bg-gray-50"
                                @click="emit('close')"
                            >
                                <span>{{ athlete.lastName }} {{ athlete.firstName }}</span>
                                <span class="text-gray-400">«{{ athlete.club }}»</span>
                            </a>
                        </li>
                    </ul>
                    <p class="label mt-5 text-gray-400">Клубы</p>
                    <ul class="mt-2 space-y-1">
                        <li v-for="club in clubHits()" :key="club.id">
                            <a
                                href="#clubs"
                                class="flex items-center justify-between rounded-sm px-2 py-2 text-sm hover:bg-gray-50"
                                @click="emit('close')"
                            >
                                <span>«{{ club.name }}»</span>
                                <span class="text-gray-400">{{ club.city }}</span>
                            </a>
                        </li>
                    </ul>
                    <p class="demo-tag mt-4">Демонстрационный поиск</p>
                </div>
            </div>
        </div>
    </Teleport>
</template>
