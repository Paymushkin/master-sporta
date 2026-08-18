<script setup lang="ts">
import { ArrowRight, FileText } from '@lucide/vue';
import { federationDocuments, federationNews } from '@/data/home';

const cardClass =
    '@container flex h-full min-w-0 flex-col rounded-[16px] border border-[#E8EEF6] bg-white p-[clamp(16px,2vw,24px)] shadow-[0_8px_28px_rgba(15,23,42,0.06)]';

const headerLinkClass =
    'inline-flex shrink-0 items-center gap-1 text-[13px] font-semibold text-blue-600 transition duration-200 hover:text-blue-500';

const docTone: Record<string, string> = {
    red: 'bg-[#FDE8EB] text-[#C7192D]',
    blue: 'bg-[#E8F1FF] text-[#185FA5]',
    green: 'bg-[#E7F7EE] text-[#15914A]',
};
</script>

<template>
    <div
        id="news"
        class="grid-fluid gap-4 [--grid-min:20rem] min-[1080px]:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]"
    >
        <section :class="cardClass" aria-labelledby="federation-news-title">
            <div class="mb-5 flex flex-wrap items-center justify-between gap-3">
                <h2 id="federation-news-title" class="min-w-0 text-[16px] font-bold text-ink md:text-[18px]">
                    Новости федерации
                </h2>
                <a href="#news" :class="headerLinkClass">
                    Все новости
                    <ArrowRight class="size-3.5" :stroke-width="2" aria-hidden="true" />
                </a>
            </div>

            <div class="grid-fluid gap-6 [--grid-min:12.5rem] min-[1080px]:grid-cols-3">
                <article v-for="item in federationNews" :key="item.id" class="min-w-0">
                    <a :href="item.href" class="group block">
                        <img
                            :src="item.image"
                            :alt="item.title"
                            width="640"
                            height="480"
                            class="aspect-[4/3] w-full rounded-[10px] object-cover"
                        />
                        <p class="mt-3 text-[12px] text-gray-400">{{ item.date }}</p>
                        <h3 class="mt-1 text-[15px] leading-snug font-bold text-ink">
                            {{ item.title }}
                        </h3>
                        <span
                            class="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-blue-600 transition duration-200 group-hover:text-blue-500"
                        >
                            Читать далее
                            <ArrowRight class="size-3.5" :stroke-width="2" aria-hidden="true" />
                        </span>
                    </a>
                </article>
            </div>
        </section>

        <section id="documents" :class="cardClass" aria-labelledby="federation-docs-title">
            <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h2 id="federation-docs-title" class="min-w-0 text-[16px] font-bold text-ink md:text-[18px]">
                    Документы и регламенты
                </h2>
                <a href="#documents" :class="headerLinkClass">
                    Все документы
                    <ArrowRight class="size-3.5" :stroke-width="2" aria-hidden="true" />
                </a>
            </div>

            <ul>
                <li
                    v-for="doc in federationDocuments"
                    :key="doc.id"
                    class="border-t border-[#EEF2F7] first:border-t-0"
                >
                    <a :href="doc.href" class="flex items-start gap-3 py-3.5 transition hover:opacity-80">
                        <span
                            class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg"
                            :class="docTone[doc.tone]"
                        >
                            <FileText class="size-5" :stroke-width="1.75" aria-hidden="true" />
                        </span>
                        <span class="min-w-0">
                            <span class="block text-[14px] leading-snug font-semibold text-ink">
                                {{ doc.title }}
                            </span>
                            <span class="mt-1 block text-[12px] text-gray-400">{{ doc.meta }}</span>
                        </span>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>
