<script setup lang="ts">
withDefaults(
    defineProps<{
        tone?: 'blue' | 'red' | 'white' | 'muted' | 'live';
        size?: 'sm' | 'md';
    }>(),
    {
        tone: 'blue',
        size: 'sm',
    },
);
</script>

<template>
    <span
        class="label inline-flex items-center gap-1.5 rounded-xs border px-2 py-1"
        :class="{
            'text-[11px]': size === 'sm',
            'text-xs px-2.5 py-1.5': size === 'md',
            'border-blue-500/20 bg-blue-500/10 text-blue-400': tone === 'blue',
            'border-red-500/20 bg-red-500/10 text-red-400': tone === 'red',
            'border-white/15 bg-white/8 text-white': tone === 'white',
            'border-gray-200 bg-gray-50 text-gray-600': tone === 'muted',
            'border-red-500 bg-red-500 text-white': tone === 'live',
        }"
    >
        <span
            v-if="tone === 'live'"
            class="size-1.5 rounded-full bg-white"
            aria-hidden="true"
        />
        <slot />
    </span>
</template>
