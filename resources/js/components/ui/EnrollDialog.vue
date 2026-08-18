<script setup lang="ts">
import { X } from '@lucide/vue';
import AppButton from '@/components/ui/AppButton.vue';
import { useBodyScrollLock } from '@/composables/useBodyScrollLock';
import { onMounted, onUnmounted, toRef } from 'vue';

const props = defineProps<{
    open: boolean;
}>();

const emit = defineEmits<{
    close: [];
}>();

useBodyScrollLock(toRef(props, 'open'));

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
            class="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="enroll-title"
        >
            <button
                type="button"
                class="absolute inset-0 bg-navy-950/60"
                aria-label="Закрыть окно"
                @click="emit('close')"
            />
            <div class="relative w-full max-w-md rounded-lg bg-white p-6 shadow-card">
                <button
                    type="button"
                    class="absolute top-4 right-4 inline-flex size-10 items-center justify-center rounded-sm border border-gray-200"
                    aria-label="Закрыть"
                    @click="emit('close')"
                >
                    <X class="size-4" :stroke-width="1.75" />
                </button>
                <p class="label text-blue-600">Демонстрация</p>
                <h2 id="enroll-title" class="font-display mt-3 text-3xl uppercase">Заявка в клуб</h2>
                <p class="mt-3 text-gray-600">
                    Это демонстрационный сценарий записи. В рабочей версии платформы заявка будет направлена в выбранный клуб.
                </p>
                <div class="mt-6">
                    <AppButton block @click="emit('close')">Понятно</AppButton>
                </div>
            </div>
        </div>
    </Teleport>
</template>
