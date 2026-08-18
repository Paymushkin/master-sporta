<script setup lang="ts">
import { ref } from 'vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import AppHeader from '@/components/layout/AppHeader.vue';
import MobileMenu from '@/components/layout/MobileMenu.vue';
import EnrollDialog from '@/components/ui/EnrollDialog.vue';
import LoginDialog from '@/components/ui/LoginDialog.vue';
import SearchDialog from '@/components/ui/SearchDialog.vue';

const menuOpen = ref(false);
const enrollOpen = ref(false);
const searchOpen = ref(false);
const loginOpen = ref(false);

const openSearch = () => {
    menuOpen.value = false;
    searchOpen.value = true;
};

const openLogin = () => {
    menuOpen.value = false;
    loginOpen.value = true;
};

defineExpose({
    openEnroll: () => {
        enrollOpen.value = true;
    },
});
</script>

<template>
    <div class="bg-white">
        <a
            href="#regions"
            class="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[80] focus:rounded-sm focus:bg-white focus:px-4 focus:py-3"
        >
            Перейти к содержимому
        </a>
        <AppHeader
            :menu-open="menuOpen"
            @toggle-menu="menuOpen = !menuOpen"
            @open-search="openSearch"
            @open-login="openLogin"
        />
        <MobileMenu
            :open="menuOpen"
            @close="menuOpen = false"
            @open-search="openSearch"
            @open-login="openLogin"
        />
        <SearchDialog :open="searchOpen" @close="searchOpen = false" />
        <LoginDialog :open="loginOpen" @close="loginOpen = false" />
        <EnrollDialog :open="enrollOpen" @close="enrollOpen = false" />
        <main>
            <slot :open-enroll="() => (enrollOpen = true)" />
        </main>
        <AppFooter />
    </div>
</template>
