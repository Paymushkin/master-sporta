<script setup lang="ts">
defineProps<{
    label?: string;
    tone?: 'light' | 'dark';
}>();
</script>

<template>
    <p
        class="demo-tag"
        :class="tone === 'dark' ? 'text-white/35' : 'text-gray-400'"
    >
        {{ label ?? 'Демонстрационные данные' }}
    </p>
</template>
