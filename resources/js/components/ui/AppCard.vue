<script setup lang="ts">
withDefaults(
    defineProps<{
        tone?: 'light' | 'dark';
        padding?: boolean;
        hover?: boolean;
    }>(),
    {
        tone: 'light',
        padding: true,
        hover: false,
    },
);
</script>

<template>
    <div
        :class="[
            tone === 'light' ? 'card-light' : 'card-dark',
            padding ? 'p-5 md:p-6' : '',
            hover ? 'transition duration-200 hover:-translate-y-0.5' : '',
        ]"
    >
        <slot />
    </div>
</template>
