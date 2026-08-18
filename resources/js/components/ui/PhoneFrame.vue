<script setup lang="ts">
withDefaults(
    defineProps<{
        tone?: 'light' | 'dark';
    }>(),
    {
        tone: 'dark',
    },
);
</script>

<template>
    <div class="mx-auto w-[240px] max-w-full">
        <div
            class="relative overflow-hidden rounded-[28px] border p-3 shadow-card"
            :class="tone === 'dark' ? 'border-white/10 bg-navy-950' : 'border-gray-200 bg-gray-100'"
        >
            <div
                class="mb-3 flex items-center justify-between px-4"
                aria-hidden="true"
            >
                <span
                    class="h-3 w-16 rounded-full"
                    :class="tone === 'dark' ? 'bg-white/15' : 'bg-gray-300'"
                />
                <span
                    class="size-3 rounded-full"
                    :class="tone === 'dark' ? 'bg-white/15' : 'bg-gray-300'"
                />
            </div>
            <div
                class="min-h-[420px] overflow-hidden rounded-[20px]"
                :class="tone === 'dark' ? 'bg-navy-900' : 'bg-white'"
            >
                <slot />
            </div>
        </div>
    </div>
</template>
