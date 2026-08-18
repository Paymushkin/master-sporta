import { onMounted, onUnmounted, ref } from 'vue';

export function usePrefersReducedMotion() {
    const prefersReduced = ref(false);

    onMounted(() => {
        const media = window.matchMedia('(prefers-reduced-motion: reduce)');
        prefersReduced.value = media.matches;
        const onChange = () => {
            prefersReduced.value = media.matches;
        };
        media.addEventListener('change', onChange);
        onUnmounted(() => media.removeEventListener('change', onChange));
    });

    return prefersReduced;
}
