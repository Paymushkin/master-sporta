<script setup lang="ts">
import { MapPin, UserRound } from '@lucide/vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppContainer from '@/components/ui/AppContainer.vue';
import { heroStats } from '@/data/home';
import { publicUrl } from '@/lib/publicUrl';

const format = (value: number) => value.toLocaleString('ru-RU');
const heroDesktop = publicUrl('images/hero-bg.jpg');
const heroMobile = publicUrl('images/hero-bg-mobile.jpg');
</script>

<template>
    <section
        id="top"
        class="relative isolate overflow-hidden bg-[#021339] text-white"
    >
        <div class="absolute inset-0">
            <picture>
                <source media="(max-width: 767px)" :srcset="heroMobile" />
                <img
                    :src="heroDesktop"
                    alt="Бой по кикбоксингу: спортсмен в красной экипировке проводит высокий удар ногой, соперник в синей экипировке в защитной стойке"
                    class="h-full w-full object-cover object-right md:object-contain"
                    width="2400"
                    height="1280"
                    fetchpriority="high"
                />
            </picture>
        </div>

        <div class="pointer-events-none absolute inset-y-0 right-0 hidden w-[28%] overflow-hidden md:block" aria-hidden="true">
            <div class="absolute top-[-30%] right-[-18%] flex h-[160%] w-36 origin-top rotate-[-24deg] gap-2">
                <span class="w-6 bg-white/20" />
                <span class="w-10 bg-blue-500/45" />
                <span class="w-10 bg-red-500/50" />
            </div>
        </div>

        <AppContainer class="relative z-10 pt-[calc(var(--header-h)+2.5rem)] pb-[clamp(4rem,8vw,7rem)] md:pt-[clamp(5.5rem,10vw,8rem)]">
            <div class="max-w-[min(100%,640px)]">
                <h1 class="heading-1">
                    Кикбоксинг<br>
                    России
                </h1>
                <p class="mt-6 w-[70%] max-w-lg text-base leading-relaxed text-white sm:w-auto sm:text-lg md:mt-8 md:text-xl">
                    Единая цифровая платформа для спортсменов, тренеров, клубов и федераций
                </p>
                <div class="mt-8 inline-flex flex-col items-stretch gap-2 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
                    <AppButton href="#clubs" size="sm" class="w-full !rounded-lg whitespace-nowrap sm:w-auto sm:!h-14 sm:!px-7 sm:text-base">
                        <MapPin class="size-4 shrink-0 sm:size-5" :stroke-width="2" aria-hidden="true" />
                        Найти клуб
                    </AppButton>
                    <AppButton href="#athletes" variant="secondary-dark" size="sm" class="w-full !rounded-lg whitespace-nowrap sm:w-auto sm:!h-14 sm:!px-7 sm:text-base">
                        <UserRound class="size-4 shrink-0 sm:size-5" :stroke-width="2" aria-hidden="true" />
                        Найти спортсмена
                    </AppButton>
                </div>
            </div>

            <dl
                class="mt-8 grid grid-cols-4 gap-1 rounded-lg bg-black/45 px-2 py-3 backdrop-blur-sm sm:flex sm:flex-wrap sm:items-start sm:gap-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none md:mt-12"
            >
                <div
                    v-for="stat in heroStats"
                    :key="stat.label"
                    class="flex min-w-0 flex-col px-0.5 text-center last:hidden sm:border-white/20 sm:py-0.5 sm:pr-6 sm:pl-6 sm:text-left sm:last:flex sm:first:pl-0 sm:not-first:border-l"
                >
                    <dt class="order-2 mt-1 text-[9px] leading-tight text-white/70 sm:text-[13px]">{{ stat.label }}</dt>
                    <dd class="order-1 font-display text-[16px] leading-none font-semibold sm:text-[28px]">
                        {{ format(stat.value) }}
                    </dd>
                </div>
            </dl>
        </AppContainer>
    </section>
</template>
