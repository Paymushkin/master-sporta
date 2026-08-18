<script setup lang="ts">
import { publicUrl } from '@/lib/publicUrl';

withDefaults(
    defineProps<{
        compact?: boolean;
    }>(),
    {
        compact: false,
    },
);

const logoSrc = publicUrl('images/logo-short.png');
</script>

<template>
    <a
        href="#top"
        class="inline-flex shrink-0 items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3"
        aria-label="Мастер Спорта — кикбоксинг России"
    >
        <img
            :src="logoSrc"
            alt=""
            width="203"
            height="192"
            class="h-11 w-auto shrink-0"
        >
        <span v-if="!compact" class="flex items-center gap-3">
            <span class="leading-[0.95]">
                <span class="font-display block text-[20px] font-semibold tracking-[0.04em] text-white uppercase">
                    Мастер
                </span>
                <span class="font-display mt-0.5 block text-[20px] font-semibold tracking-[0.04em] text-red-500 uppercase">
                    Спорта
                </span>
            </span>
            <span class="hidden h-9 w-px bg-white/35 sm:block" aria-hidden="true" />
            <span class="hidden leading-[1.15] sm:block">
                <span class="block text-[11px] font-semibold tracking-[0.08em] text-white uppercase">
                    Кикбоксинг
                </span>
                <span class="mt-0.5 block text-[11px] font-semibold tracking-[0.08em] text-white uppercase">
                    России
                </span>
            </span>
        </span>
    </a>
</template>
