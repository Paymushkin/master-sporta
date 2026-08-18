<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        variant?: 'primary' | 'secondary' | 'secondary-dark' | 'ghost';
        href?: string;
        type?: 'button' | 'submit';
        block?: boolean;
        disabled?: boolean;
        size?: 'md' | 'sm';
    }>(),
    {
        variant: 'primary',
        type: 'button',
        block: false,
        disabled: false,
        size: 'md',
    },
);

const emit = defineEmits<{
    click: [event: MouseEvent];
}>();

const classes = computed(() => {
    const base =
        'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-sm transition duration-200 ease-out cursor-pointer disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-3';

    const sizes = {
        md: 'h-[52px] px-7 text-[15px] md:h-14 md:text-base',
        sm: 'h-11 px-5 text-sm',
    };

    const variants = {
        primary:
            'bg-red-500 text-white hover:bg-red-600 hover:-translate-y-px active:translate-y-0 active:bg-red-600',
        secondary:
            'bg-transparent text-ink border border-gray-200 hover:border-navy-700 hover:-translate-y-px',
        'secondary-dark':
            'bg-transparent text-white border border-white/25 hover:border-white hover:bg-white/5 hover:-translate-y-px',
        ghost: 'bg-transparent text-white hover:bg-white/8',
    };

    return [
        base,
        sizes[props.size],
        variants[props.variant],
        props.block ? 'w-full' : '',
    ].join(' ');
});
</script>

<template>
    <a
        v-if="href"
        :href="disabled ? undefined : href"
        :class="classes"
        :aria-disabled="disabled || undefined"
        @click="emit('click', $event)"
    >
        <slot />
    </a>
    <button
        v-else
        :type="type"
        :class="classes"
        :disabled="disabled"
        @click="emit('click', $event)"
    >
        <slot />
    </button>
</template>
