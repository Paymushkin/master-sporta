<script setup lang="ts">
import { ArrowRight, Building2, CalendarDays, MapPin, Search, Trophy, UserRound, Users } from '@lucide/vue';
import { ref, type Component } from 'vue';
import ClubsMapPreview from '@/components/clubs/ClubsMapPreview.vue';
import AppContainer from '@/components/ui/AppContainer.vue';
import { quickLinks, topAthletesPreview, upcomingEvents } from '@/data/home';
import NewsSection from '@/sections/NewsSection.vue';

const quickIcons: Record<string, Component> = {
    athletes: Users,
    coaches: UserRound,
    clubs: Building2,
    competitions: Trophy,
    regions: MapPin,
};

const quickTones: Record<string, string> = {
    athletes: 'bg-[#E8F1FF] text-[#185FA5]',
    coaches: 'bg-[#FDE8EB] text-[#C7192D]',
    clubs: 'bg-[#E7F7EE] text-[#15914A]',
    competitions: 'bg-[#FFF4E5] text-[#C2410C]',
    regions: 'bg-[#EEF2F7] text-navy-800',
};

const badgeClass: Record<string, string> = {
    pink: 'bg-[#FDE8EB] text-[#C7192D]',
    blue: 'bg-[#E8F1FF] text-[#185FA5]',
    navy: 'bg-navy-900/8 text-navy-800',
};

const clubQuery = ref('');

const cardClass =
    '@container flex h-full min-h-0 min-w-0 flex-col overflow-hidden rounded-[16px] border border-[#E8EEF6] bg-white shadow-[0_8px_28px_rgba(15,23,42,0.06)]';

const footerBtnClass =
    'mt-auto flex h-12 min-w-0 items-center justify-between gap-3 rounded-md bg-blue-500/5 px-4 text-[13px] font-semibold text-blue-600 transition duration-200 hover:bg-blue-500/10';
</script>

<template>
    <section id="regions" class="relative z-10">
        <AppContainer class="-mt-12 mb-10 md:-mt-16 md:mb-14">
            <div class="rounded-[16px] bg-white p-3 sm:p-4 md:rounded-[24px] md:p-5">
                <div class="grid-fluid gap-3 [--grid-min:13.75rem] min-[1200px]:grid-cols-5">
                    <a
                        v-for="item in quickLinks"
                        :key="item.id"
                        :href="item.href"
                        class="group flex min-w-0 items-start gap-3 rounded-[12px] bg-gray-50 p-3 transition duration-200 hover:-translate-y-0.5 hover:bg-gray-100 sm:p-4 md:rounded-[16px]"
                    >
                        <span
                            class="inline-flex size-11 shrink-0 items-center justify-center rounded-full"
                            :class="quickTones[item.id]"
                        >
                            <component
                                :is="quickIcons[item.id]"
                                class="size-5"
                                :stroke-width="1.75"
                                aria-hidden="true"
                            />
                        </span>
                        <span class="min-w-0">
                            <p class="text-[16px] font-semibold text-ink">{{ item.title }}</p>
                            <p class="mt-1 text-[13px] leading-snug text-gray-600">{{ item.description }}</p>
                        </span>
                    </a>
                </div>
            </div>

            <div
                class="mt-6 grid-fluid gap-4 [--grid-min:17.5rem] min-[1140px]:grid-cols-[minmax(0,1.25fr)_minmax(0,0.8fr)_minmax(0,1.35fr)]"
            >
                    <section :class="cardClass" aria-labelledby="upcoming-title">
                        <div class="px-[clamp(12px,2vw,20px)] pt-5 pb-4">
                            <h2 id="upcoming-title" class="text-[16px] font-bold text-ink md:text-[18px]">
                                Ближайшие соревнования
                            </h2>
                        </div>

                        <ul class="flex-1">
                            <li
                                v-for="event in upcomingEvents"
                                :key="event.id"
                                class="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3 border-t border-[#EEF2F7] px-[clamp(12px,2vw,20px)] py-3.5 @min-[540px]:grid-cols-[4rem_minmax(0,1fr)_auto] @min-[540px]:items-center"
                            >
                                <div class="text-left">
                                    <p class="text-[18px] leading-none font-extrabold text-ink">
                                        {{ event.dateStart }}–{{ event.dateEnd }}
                                    </p>
                                    <p class="mt-1 text-[10px] font-bold tracking-[0.12em] text-gray-400 uppercase">
                                        {{ event.month }}
                                    </p>
                                </div>
                                <div class="min-w-0">
                                    <span
                                        class="inline-flex rounded-[4px] px-1.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase"
                                        :class="badgeClass[event.badgeTone]"
                                    >
                                        {{ event.badge }}
                                    </span>
                                    <p class="mt-1 truncate text-[14px] font-semibold text-ink">{{ event.title }}</p>
                                    <p class="mt-0.5 flex items-center gap-1 text-[12px] text-gray-600">
                                        <MapPin class="size-3 shrink-0 text-gray-400" :stroke-width="2" aria-hidden="true" />
                                        {{ event.city }}
                                    </p>
                                    <p
                                        class="mt-1 text-[11px] font-semibold @min-[540px]:hidden"
                                        :class="
                                            event.status === 'Регистрация открыта' ? 'text-green-600' : 'text-gray-400'
                                        "
                                    >
                                        {{ event.status }}
                                    </p>
                                </div>
                                <div class="hidden min-w-0 text-left @min-[540px]:block">
                                    <p class="text-[10px] text-gray-400">Статус</p>
                                    <p
                                        class="mt-0.5 text-[10px] font-semibold"
                                        :class="
                                            event.status === 'Регистрация открыта' ? 'text-green-600' : 'text-gray-400'
                                        "
                                    >
                                        {{ event.status }}
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <div class="px-[clamp(12px,2vw,20px)] pt-3 pb-5">
                            <a href="#competitions" :class="footerBtnClass">
                                <span class="inline-flex items-center gap-2">
                                    <CalendarDays class="size-4" :stroke-width="1.75" aria-hidden="true" />
                                    Календарь соревнований
                                </span>
                                <ArrowRight class="size-4" :stroke-width="1.75" aria-hidden="true" />
                            </a>
                        </div>
                    </section>

                    <section :class="cardClass" aria-labelledby="top-athletes-title">
                        <div class="px-[clamp(12px,2vw,20px)] pt-5 pb-4">
                            <h2 id="top-athletes-title" class="text-[16px] font-bold text-ink md:text-[18px]">
                                Топ спортсменов
                            </h2>
                        </div>

                        <ol class="flex-1">
                            <li
                                v-for="athlete in topAthletesPreview"
                                :key="athlete.id"
                                class="flex items-center gap-2.5 border-t border-[#EEF2F7] px-[clamp(12px,2vw,20px)] py-2.5"
                            >
                                <span class="w-4 shrink-0 text-[13px] font-semibold text-gray-400">{{
                                    athlete.place
                                }}</span>
                                <img
                                    :src="athlete.image"
                                    :alt="athlete.name"
                                    width="40"
                                    height="40"
                                    class="size-10 shrink-0 rounded-full object-cover"
                                />
                                <div class="min-w-0 flex-1">
                                    <p class="truncate text-[14px] font-semibold text-ink">{{ athlete.name }}</p>
                                    <p class="mt-0.5 flex items-center gap-1 text-[12px] text-gray-600">
                                        <MapPin class="size-3 shrink-0 text-gray-400" :stroke-width="2" aria-hidden="true" />
                                        <span class="truncate">{{ athlete.city }}</span>
                                    </p>
                                </div>
                                <div class="shrink-0 text-right">
                                    <p class="text-[10px] text-gray-400">Рейтинг</p>
                                    <p class="text-[16px] leading-none font-bold text-red-500">{{ athlete.rating }}</p>
                                </div>
                            </li>
                        </ol>

                        <div class="px-[clamp(12px,2vw,20px)] pt-3 pb-5">
                            <a href="#rankings" :class="footerBtnClass">
                                <span class="inline-flex items-center gap-2">
                                    <Trophy class="size-4" :stroke-width="1.75" aria-hidden="true" />
                                    Рейтинг спортсменов
                                </span>
                                <ArrowRight class="size-4" :stroke-width="1.75" aria-hidden="true" />
                            </a>
                        </div>
                    </section>

                    <section :class="cardClass" aria-labelledby="clubs-map-title">
                        <div class="px-[clamp(12px,2vw,20px)] pt-5 pb-3">
                            <h2 id="clubs-map-title" class="text-[16px] font-bold text-ink md:text-[18px]">
                                Карта клубов
                            </h2>
                        </div>

                        <div class="flex flex-1 flex-col px-[clamp(12px,2vw,20px)] pb-5">
                            <ClubsMapPreview class="min-h-[clamp(160px,32vw,220px)] flex-1" />
                            <div class="mt-auto pt-3">
                                <p class="text-[15px] font-semibold text-ink">Найдите клуб рядом с вами</p>
                                <form class="mt-3 flex flex-wrap items-center gap-2" action="#clubs">
                                    <label class="relative min-w-[min(100%,12rem)] flex-1">
                                        <span class="sr-only">Город или регион</span>
                                        <input
                                            v-model="clubQuery"
                                            type="search"
                                            name="q"
                                            placeholder="Введите город или регион"
                                            class="h-11 w-full rounded-md border border-gray-200 bg-gray-50 pr-10 pl-3 text-[13px] text-ink outline-none placeholder:text-gray-400 focus:border-blue-400"
                                        />
                                        <Search
                                            class="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-gray-400"
                                            :stroke-width="1.75"
                                            aria-hidden="true"
                                        />
                                    </label>
                                    <a
                                        href="#clubs"
                                        class="inline-flex h-11 shrink-0 items-center rounded-md bg-blue-500/10 px-4 text-[13px] font-semibold text-blue-600 transition duration-200 hover:bg-blue-500/15"
                                    >
                                        Все клубы
                                    </a>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>

                <NewsSection class="mt-6" />
        </AppContainer>
    </section>
</template>
