<script setup lang="ts">
defineProps<{
    options: string[];
    modelValue: string;
    tone?: 'light' | 'dark';
    name?: string;
}>();

defineEmits<{
    'update:modelValue': [value: string];
}>();
</script>

<template>
    <div
        class="flex flex-wrap gap-2"
        :role="name ? 'group' : undefined"
        :aria-label="name"
    >
        <button
            v-for="option in options"
            :key="option"
            type="button"
            class="label h-9 rounded-sm border px-3 transition duration-200"
            :class="
                modelValue === option
                    ? 'border-red-500 bg-red-500 text-white'
                    : tone === 'dark'
                      ? 'border-white/15 bg-transparent text-white/70 hover:border-white/40 hover:text-white'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-navy-700 hover:text-ink'
            "
            :aria-pressed="modelValue === option"
            @click="$emit('update:modelValue', option)"
        >
            {{ option }}
        </button>
    </div>
</template>
