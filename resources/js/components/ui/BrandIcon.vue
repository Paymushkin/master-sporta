<script setup lang="ts">
import type { BrandGlyph } from '@/types/brand';

const props = defineProps<{
    icon: BrandGlyph;
}>();
</script>

<template>
    <svg
        :viewBox="props.icon.viewBox ?? '0 0 24 24'"
        fill="currentColor"
        aria-hidden="true"
    >
        <path
            :d="props.icon.path"
            :fill-rule="props.icon.evenodd ? 'evenodd' : 'nonzero'"
        />
    </svg>
</template>
