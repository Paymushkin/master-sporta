<script setup lang="ts">
withDefaults(
    defineProps<{
        initials: string;
        size?: 'sm' | 'md' | 'lg' | 'xl';
        accent?: 'blue' | 'red';
        shape?: 'rounded' | 'circle';
        alt?: string;
        image?: string;
    }>(),
    {
        size: 'md',
        accent: 'blue',
        shape: 'rounded',
    },
);

const sizes = {
    sm: 'size-10 text-sm',
    md: 'size-14 text-base',
    lg: 'size-20 text-2xl',
    xl: 'size-28 text-3xl md:size-32',
};
</script>

<template>
    <div
        class="relative flex shrink-0 items-center justify-center overflow-hidden font-display font-semibold text-white"
        :class="[
            sizes[size],
            shape === 'circle' ? 'rounded-full' : 'rounded-md',
            accent === 'blue' ? 'bg-navy-700' : 'bg-navy-800',
        ]"
        :aria-label="image ? undefined : alt"
        :role="image ? undefined : 'img'"
    >
        <img
            v-if="image"
            :src="image"
            :alt="alt ?? ''"
            width="112"
            height="112"
            class="absolute inset-0 size-full object-cover"
        />
        <template v-else>
            <span
                class="absolute inset-0 opacity-70"
                :class="accent === 'blue' ? 'bg-linear-to-br from-blue-600/40 to-navy-950' : 'bg-linear-to-br from-red-600/35 to-navy-950'"
            />
            <span class="absolute top-0 right-0 h-10 w-8 translate-x-2 -translate-y-2 rotate-12 bg-white/8" />
            <span class="relative tracking-wide">{{ initials }}</span>
        </template>
    </div>
</template>
