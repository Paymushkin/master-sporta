<script setup lang="ts">
withDefaults(
    defineProps<{
        eyebrow?: string;
        title: string;
        description?: string;
        align?: 'left' | 'center';
        tone?: 'light' | 'dark';
        titleClass?: string;
    }>(),
    {
        align: 'left',
        tone: 'light',
    },
);
</script>

<template>
    <header
        :class="[
            'max-w-3xl',
            align === 'center' && 'mx-auto text-center',
        ]"
    >
        <p
            v-if="eyebrow"
            class="eyebrow"
            :class="tone === 'dark' ? 'eyebrow-light' : 'text-blue-600'"
        >
            {{ eyebrow }}
        </p>
        <h2
            class="heading-2 mt-4 text-balance"
            :class="[tone === 'dark' ? 'text-white' : 'text-ink', titleClass]"
            v-html="title"
        />
        <p
            v-if="description"
            class="body-lg mt-6 md:mt-8"
            :class="tone === 'dark' ? 'text-white/70' : 'text-gray-600'"
        >
            {{ description }}
        </p>
        <div v-if="$slots.default" class="mt-6">
            <slot />
        </div>
    </header>
</template>
