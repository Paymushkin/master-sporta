<script setup lang="ts">
export interface TabItem {
    id: string;
    label: string;
}

defineProps<{
    tabs: TabItem[];
    modelValue: string;
    tone?: 'light' | 'dark';
}>();

defineEmits<{
    'update:modelValue': [id: string];
}>();
</script>

<template>
    <div
        role="tablist"
        class="flex gap-1 overflow-x-auto scrollbar-none"
        :class="tone === 'dark' ? 'border-b border-white/10' : 'border-b border-gray-200'"
    >
        <button
            v-for="tab in tabs"
            :key="tab.id"
            type="button"
            role="tab"
            :aria-selected="modelValue === tab.id"
            class="label relative shrink-0 px-4 py-3 transition duration-200"
            :class="
                modelValue === tab.id
                    ? tone === 'dark'
                        ? 'text-white'
                        : 'text-ink'
                    : tone === 'dark'
                      ? 'text-white/45 hover:text-white/80'
                      : 'text-gray-400 hover:text-ink'
            "
            @click="$emit('update:modelValue', tab.id)"
        >
            {{ tab.label }}
            <span
                v-if="modelValue === tab.id"
                class="absolute inset-x-3 -bottom-px h-0.5 bg-red-500"
            />
        </button>
    </div>
</template>
