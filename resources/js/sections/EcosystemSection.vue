<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';
import AppContainer from '@/components/ui/AppContainer.vue';
import AppSection from '@/components/ui/AppSection.vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import { ecosystemChain } from '@/data/platform';
</script>

<template>
    <AppSection id="about" theme="muted">
        <AppContainer>
            <SectionHeader
                eyebrow="Единая платформа"
                title="Весь российский кикбоксинг<br>в одной системе"
                description="Спортсмены, тренеры, клубы, соревнования и результаты становятся частью единой связанной цифровой системы."
            />

            <div class="mt-12 md:mt-16">
                <ol class="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
                    <li
                        v-for="(node, index) in ecosystemChain"
                        :key="node.id"
                        class="relative"
                    >
                        <article class="card-light flex h-full min-h-[140px] flex-col justify-between p-5">
                            <span class="font-display text-3xl text-blue-500">
                                {{ String(index + 1).padStart(2, '0') }}
                            </span>
                            <h3 class="font-display text-2xl font-semibold uppercase">{{ node.label }}</h3>
                        </article>
                        <ArrowRight
                            v-if="index < ecosystemChain.length - 1"
                            class="absolute top-1/2 -right-4 hidden size-5 text-gray-400 lg:block"
                            :stroke-width="1.75"
                            aria-hidden="true"
                        />
                    </li>
                </ol>
            </div>
        </AppContainer>
    </AppSection>
</template>
