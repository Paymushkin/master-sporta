<script setup lang="ts">
withDefaults(
    defineProps<{
        side?: 'left' | 'right';
        size?: 'sm' | 'md';
        vertical?: boolean;
    }>(),
    {
        side: 'right',
        size: 'md',
        vertical: false,
    },
);
</script>

<template>
    <div
        class="pointer-events-none absolute overflow-hidden"
        :class="[
            vertical
                ? 'inset-y-0 w-3'
                : size === 'sm'
                  ? 'h-10 w-40'
                  : 'h-16 w-56',
            vertical && side === 'left' ? 'left-0' : '',
            vertical && side === 'right' ? 'right-0' : '',
            !vertical && side === 'left' ? 'bottom-8 left-0' : '',
            !vertical && side === 'right' ? 'right-0 bottom-10' : '',
        ]"
        aria-hidden="true"
    >
        <div
            class="absolute inset-0 flex gap-1.5 opacity-80"
            :class="vertical ? 'flex-col' : 'origin-center rotate-[-28deg]'"
        >
            <span class="flex-1 bg-white/80" />
            <span class="flex-1 bg-blue-500/80" />
            <span class="flex-1 bg-red-500/80" />
        </div>
    </div>
</template>
