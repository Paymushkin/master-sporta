<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';
import AppContainer from '@/components/ui/AppContainer.vue';
import AppSection from '@/components/ui/AppSection.vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import { roadmap } from '@/data/platform';
</script>

<template>
    <AppSection id="academy" theme="muted">
        <AppContainer>
            <SectionHeader
                title="От цифрового фундамента —<br>к экосистеме"
            />

            <ol class="mt-12 grid gap-4 md:mt-16 lg:grid-cols-4">
                <li
                    v-for="(stage, index) in roadmap"
                    :key="stage.id"
                    class="relative"
                >
                    <article
                        class="h-full rounded-lg border p-5 md:p-6"
                        :class="
                            stage.active
                                ? 'border-red-500/20 bg-white shadow-card'
                                : 'border-gray-200 bg-white/70'
                        "
                    >
                        <div class="flex items-center justify-between">
                            <p class="label" :class="stage.active ? 'text-red-500' : 'text-gray-400'">
                                {{ stage.stage }}
                            </p>
                            <span
                                v-if="stage.active"
                                class="label rounded-xs bg-red-500 px-2 py-1 text-white"
                            >
                                Сейчас
                            </span>
                        </div>
                        <h3
                            class="font-display mt-4 text-3xl uppercase"
                            :class="stage.active ? 'text-ink' : 'text-gray-600'"
                        >
                            {{ stage.title }}
                        </h3>
                        <ul class="mt-5 space-y-2 text-sm" :class="stage.active ? 'text-ink' : 'text-gray-600'">
                            <li v-for="item in stage.items" :key="item">{{ item }}</li>
                        </ul>
                    </article>
                    <ArrowRight
                        v-if="index < roadmap.length - 1"
                        class="absolute top-1/2 -right-5 hidden size-5 text-gray-400 xl:block"
                        :stroke-width="1.75"
                        aria-hidden="true"
                    />
                </li>
            </ol>
        </AppContainer>
    </AppSection>
</template>
