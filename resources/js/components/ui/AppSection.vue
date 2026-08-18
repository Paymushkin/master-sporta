<script setup lang="ts">
withDefaults(
    defineProps<{
        id?: string;
        theme?: 'light' | 'muted' | 'dark' | 'navy';
        spacing?: 'default' | 'compact' | 'none';
    }>(),
    {
        theme: 'light',
        spacing: 'default',
    },
);
</script>

<template>
    <section
        :id="id"
        :class="[
            'relative overflow-hidden',
            theme === 'light' && 'bg-white text-ink',
            theme === 'muted' && 'bg-gray-50 text-ink',
            theme === 'dark' && 'bg-navy-950 text-white',
            theme === 'navy' && 'bg-navy-900 text-white',
            spacing === 'default' && 'section-space',
            spacing === 'compact' && 'py-16 md:py-20',
            spacing === 'none' && '',
        ]"
    >
        <slot />
    </section>
</template>
