<script setup lang="ts">
import { siApple, siGoogleplay, siOdnoklassniki, siVk } from 'simple-icons';
import AppLogo from '@/components/ui/AppLogo.vue';
import BrandIcon from '@/components/ui/BrandIcon.vue';
import { footerInfo, footerLegal, footerPlatform, footerSocials, footerSupport } from '@/data/navigation';
import type { BrandGlyph } from '@/types/brand';

const socialIcons: Record<(typeof footerSocials)[number]['id'], BrandGlyph> = {
    vk: { path: siVk.path, hex: '000000' },
    rutube: {
        hex: '000000',
        viewBox: '24 31 84 70',
        path: 'M81.5361 62.9865H42.5386V47.5547H81.5361C83.814 47.5547 85.3979 47.9518 86.1928 48.6451C86.9877 49.3385 87.4801 50.6245 87.4801 52.5031V58.0441C87.4801 60.0234 86.9877 61.3094 86.1928 62.0028C85.3979 62.6961 83.814 62.9925 81.5361 62.9925V62.9865ZM84.2115 33.0059H26V99H42.5386V77.5294H73.0176L87.4801 99H106L90.0546 77.4287C95.9333 76.5575 98.573 74.756 100.75 71.7869C102.927 68.8179 104.019 64.071 104.019 57.7359V52.7876C104.019 49.0303 103.621 46.0613 102.927 43.7857C102.233 41.51 101.047 39.5307 99.362 37.7528C97.5824 36.0698 95.6011 34.8845 93.2223 34.0904C90.8435 33.3971 87.8716 33 84.2115 33V33.0059Z',
    },
    max: {
        hex: '000000',
        viewBox: '90 40 820 860',
        evenodd: true,
        path: 'M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z',
    },
    ok: { path: siOdnoklassniki.path, hex: '000000' },
};

const storeIcons = {
    apple: { path: siApple.path, hex: siApple.hex },
    googleplay: { path: siGoogleplay.path, hex: siGoogleplay.hex },
};

const year = new Date().getFullYear();
</script>

<template>
    <footer id="contacts" class="bg-[#0A1428] text-white">
        <div class="container-ms py-[clamp(2.5rem,5vw,4rem)]">
            <div class="grid grid-cols-3 gap-x-3 gap-y-8 lg:grid-cols-12 lg:gap-8">
                <div class="hidden lg:order-none lg:col-span-3 lg:block">
                    <AppLogo />
                </div>

                <nav class="min-w-0 lg:col-span-2" aria-label="Платформа">
                    <p class="text-[12px] font-semibold text-white/45 lg:text-[13px]">Платформа</p>
                    <ul class="mt-3 space-y-2 lg:mt-4 lg:space-y-3">
                        <li v-for="item in footerPlatform" :key="item.label">
                            <a :href="item.href" class="text-[13px] text-white/85 transition hover:text-white lg:text-[14px]">
                                {{ item.label }}
                            </a>
                        </li>
                    </ul>
                </nav>

                <nav class="min-w-0 lg:col-span-2" aria-label="Информация">
                    <p class="text-[12px] font-semibold text-white/45 lg:text-[13px]">Информация</p>
                    <ul class="mt-3 space-y-2 lg:mt-4 lg:space-y-3">
                        <li v-for="item in footerInfo" :key="item.label">
                            <a :href="item.href" class="text-[13px] text-white/85 transition hover:text-white lg:text-[14px]">
                                {{ item.label }}
                            </a>
                        </li>
                    </ul>
                </nav>

                <nav class="min-w-0 lg:col-span-2" aria-label="Поддержка">
                    <p class="text-[12px] font-semibold text-white/45 lg:text-[13px]">Поддержка</p>
                    <ul class="mt-3 space-y-2 lg:mt-4 lg:space-y-3">
                        <li v-for="item in footerSupport" :key="item.label">
                            <a :href="item.href" class="text-[13px] text-white/85 transition hover:text-white lg:text-[14px]">
                                {{ item.label }}
                            </a>
                        </li>
                    </ul>
                </nav>

                <div class="order-5 col-span-full lg:order-none lg:col-span-3">
                    <div class="flex w-full flex-wrap items-center justify-between gap-2 lg:block lg:justify-start">
                        <p class="hidden text-[13px] font-semibold text-white/45 lg:block">Мы в соцсетях</p>
                        <ul class="flex gap-1.5 lg:mt-4 lg:gap-2">
                            <li v-for="item in footerSocials" :key="item.id">
                                <a
                                    :href="item.href"
                                    :aria-label="item.label"
                                    class="inline-flex size-8 items-center justify-center rounded-[8px] bg-black text-white transition hover:opacity-90 lg:size-10 lg:rounded-[10px]"
                                >
                                    <BrandIcon :icon="socialIcons[item.id]" class="size-5 lg:size-7" />
                                </a>
                            </li>
                        </ul>

                        <p class="mt-8 hidden text-[13px] font-semibold text-white/45 lg:block">Скачать приложение</p>
                        <div class="flex flex-wrap items-center gap-1.5 lg:mt-4 lg:gap-2">
                            <a
                                href="#contacts"
                                class="inline-flex h-8 items-center gap-1.5 rounded-md border border-white/25 bg-black px-2 text-white lg:h-auto lg:gap-2 lg:px-3 lg:py-2"
                                aria-label="Скачать в App Store"
                            >
                                <BrandIcon :icon="storeIcons.apple" class="size-4 shrink-0 lg:size-5" />
                                <span class="leading-none">
                                    <span class="block text-[7px] text-white/70 lg:text-[9px]">Download on the</span>
                                    <span class="block text-[10px] font-semibold lg:text-[13px]">App Store</span>
                                </span>
                            </a>
                            <a
                                href="#contacts"
                                class="inline-flex h-8 items-center gap-1.5 rounded-md border border-white/25 bg-black px-2 text-white lg:h-auto lg:gap-2 lg:px-3 lg:py-2"
                                aria-label="Скачать в Google Play"
                            >
                                <BrandIcon :icon="storeIcons.googleplay" class="size-4 shrink-0 lg:size-5" />
                                <span class="leading-none">
                                    <span class="block text-[7px] text-white/70 lg:text-[9px]">GET IT ON</span>
                                    <span class="block text-[10px] font-semibold lg:text-[13px]">Google Play</span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="mt-8 flex flex-row items-center gap-3 text-[10px] leading-snug text-white/40 lg:hidden">
                        <AppLogo />
                        <div class="min-w-0 flex-1 text-right">
                            <p>© {{ year }} Федерация кикбоксинга России</p>
                            <ul class="mt-1 flex flex-wrap justify-end gap-x-3 gap-y-1">
                                <li v-for="item in footerLegal" :key="item.label">
                                    <a :href="item.href" class="transition hover:text-white">{{ item.label }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="mt-10 hidden border-t border-white/10 pt-5 text-[13px] text-white/40 lg:flex lg:items-center lg:justify-between"
            >
                <p>© {{ year }} Федерация кикбоксинга России</p>
                <ul class="flex flex-wrap gap-x-5 gap-y-2">
                    <li v-for="item in footerLegal" :key="item.label">
                        <a :href="item.href" class="transition hover:text-white">{{ item.label }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
