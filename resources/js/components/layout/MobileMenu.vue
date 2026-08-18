<script setup lang="ts">
import { Search } from '@lucide/vue';
import AppButton from '@/components/ui/AppButton.vue';
import { mainNav } from '@/data/navigation';
import { useBodyScrollLock } from '@/composables/useBodyScrollLock';
import { onMounted, onUnmounted, toRef } from 'vue';

const props = defineProps<{
    open: boolean;
}>();

const emit = defineEmits<{
    close: [];
    openSearch: [];
    openLogin: [];
}>();

useBodyScrollLock(toRef(props, 'open'));

const onNavigate = () => emit('close');

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
            class="fixed inset-x-0 top-[var(--header-h)] bottom-0 z-40 min-[1120px]:hidden"
            :class="open ? 'pointer-events-auto' : 'pointer-events-none'"
            :aria-hidden="!open"
        >
            <button
                type="button"
                class="absolute inset-0 bg-navy-950/50 transition-opacity duration-300"
                :class="open ? 'opacity-100' : 'opacity-0'"
                tabindex="-1"
                aria-label="Закрыть меню"
                @click="emit('close')"
            />
            <div
                class="absolute inset-y-0 right-0 flex w-[min(100%,380px)] flex-col bg-[#050B1C] p-6 pt-4 text-white shadow-card transition-transform duration-300 ease-out"
                :class="open ? 'translate-x-0' : 'translate-x-full'"
                role="dialog"
                aria-modal="true"
                aria-label="Мобильное меню"
            >
                <nav class="flex flex-col gap-1" aria-label="Мобильная навигация">
                    <a
                        v-for="item in mainNav"
                        :key="item.label"
                        :href="item.href"
                        class="rounded-sm px-2 py-3 text-2xl font-medium transition duration-200 hover:text-blue-400"
                        @click="onNavigate"
                    >
                        {{ item.label }}
                    </a>
                </nav>
                <div class="mt-auto space-y-3 pt-8">
                    <button
                        type="button"
                        class="inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm border border-white/25 text-sm font-semibold"
                        @click="emit('openSearch')"
                    >
                        <Search class="size-4" :stroke-width="1.75" />
                        Поиск
                    </button>
                    <AppButton variant="secondary-dark" block @click="emit('openLogin')">Войти</AppButton>
                </div>
            </div>
        </div>
    </Teleport>
</template>
