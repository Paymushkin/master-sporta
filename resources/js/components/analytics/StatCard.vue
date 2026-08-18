<script setup lang="ts">
withDefaults(
    defineProps<{
        value: string | number;
        label: string;
        tone?: 'light' | 'dark';
        accent?: boolean;
    }>(),
    {
        tone: 'dark',
        accent: false,
    },
);
</script>

<template>
    <article
        :class="tone === 'dark' ? 'card-dark' : 'card-light'"
        class="p-5 md:p-6"
    >
        <p class="label" :class="tone === 'dark' ? 'text-white/40' : 'text-gray-400'">
            {{ label }}
        </p>
        <p
            class="font-display mt-3 text-[40px] leading-none font-semibold md:text-5xl"
            :class="accent ? 'text-blue-400' : tone === 'dark' ? 'text-white' : 'text-ink'"
        >
            {{ value }}
        </p>
        <slot />
    </article>
</template>
