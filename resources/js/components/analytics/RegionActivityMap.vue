<script setup lang="ts">
import { regions } from '@/data/clubs';
</script>

<template>
    <svg viewBox="0 0 1000 420" class="h-auto w-full" role="img" aria-label="Активность регионов России">
        <path
            d="M168 188 C176 148 208 132 236 138 C258 118 286 128 304 116 C338 98 382 106 418 98 C468 72 522 88 568 72 C618 52 676 66 728 54 C786 38 848 58 902 72 C948 84 982 116 988 156 C992 194 968 216 948 232 C968 272 992 318 972 358 C948 382 922 348 906 310 C888 336 868 372 838 384 C798 364 762 382 722 372 C678 398 628 388 584 372 C538 396 490 378 448 368 C408 398 364 418 322 404 C292 428 258 408 238 382 C214 352 198 318 192 284 C176 248 168 216 168 188 Z"
            fill="#0A1B35"
            stroke="rgba(50,149,255,.4)"
            stroke-width="1.5"
        />
        <circle
            v-for="region in regions"
            :key="region.id"
            :cx="region.x * 10"
            :cy="region.y * 4.2"
            r="6"
            fill="#3295FF"
        />
    </svg>
</template>
