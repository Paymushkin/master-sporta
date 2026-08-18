<script setup lang="ts">
import { Menu, Search, X } from '@lucide/vue';
import AppLogo from '@/components/ui/AppLogo.vue';
import { mainNav } from '@/data/navigation';

defineProps<{
    menuOpen?: boolean;
}>();

const emit = defineEmits<{
    toggleMenu: [];
    openSearch: [];
    openLogin: [];
}>();
</script>

<template>
    <header
        class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050B1C]/70 backdrop-blur-md transition duration-200"
    >
        <div class="container-ms flex h-[var(--header-h)] min-w-0 items-center justify-between gap-3 sm:gap-4 lg:gap-6">
            <AppLogo class="shrink-0" />

            <nav
                class="hidden min-w-0 flex-1 items-center justify-center gap-[clamp(12px,1.2vw,32px)] min-[1120px]:flex"
                aria-label="Основная навигация"
            >
                <a
                    v-for="item in mainNav"
                    :key="item.href + item.label"
                    :href="item.href"
                    class="text-[clamp(12px,0.9vw,14px)] font-medium whitespace-nowrap text-white transition duration-200 hover:text-white/70"
                >
                    {{ item.label }}
                </a>
            </nav>

            <div class="flex shrink-0 items-center gap-3 sm:gap-4">
                <button
                    type="button"
                    class="inline-flex items-center gap-2 text-sm font-medium text-white transition duration-200 hover:text-white/70"
                    @click="emit('openSearch')"
                >
                    <Search class="size-4" :stroke-width="1.75" aria-hidden="true" />
                    <span class="hidden sm:inline">Поиск</span>
                </button>
                <span class="hidden h-8 w-px bg-white/25 sm:block" aria-hidden="true" />
                <button
                    type="button"
                    class="hidden h-10 items-center rounded-sm border border-white/50 px-4 text-sm font-medium text-white transition duration-200 hover:bg-white/10 sm:inline-flex lg:px-6"
                    @click="emit('openLogin')"
                >
                    Войти
                </button>
                <button
                    type="button"
                    class="inline-flex size-10 items-center justify-center text-white min-[1120px]:hidden"
                    :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'"
                    :aria-expanded="menuOpen"
                    @click="emit('toggleMenu')"
                >
                    <X v-if="menuOpen" class="size-5" :stroke-width="1.75" />
                    <Menu v-else class="size-5" :stroke-width="1.75" />
                </button>
            </div>
        </div>
    </header>
</template>
