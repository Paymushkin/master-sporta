<script setup lang="ts">
withDefaults(
    defineProps<{
        as?: string;
        wide?: boolean;
    }>(),
    {
        as: 'div',
        wide: false,
    },
);
</script>

<template>
    <component
        :is="as"
        :class="wide ? 'w-full px-5 sm:px-8' : 'container-ms'"
    >
        <slot />
    </component>
</template>
