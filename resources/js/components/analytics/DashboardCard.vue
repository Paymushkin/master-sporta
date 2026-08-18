<script setup lang="ts">
defineProps<{
    title: string;
    hint?: string;
}>();
</script>

<template>
    <article class="rounded-lg border border-white/8 bg-navy-800 p-4 md:p-5">
        <div class="mb-4 flex items-start justify-between gap-3">
            <h3 class="label text-white/45">{{ title }}</h3>
            <p v-if="hint" class="text-xs text-white/30">{{ hint }}</p>
        </div>
        <slot />
    </article>
</template>
