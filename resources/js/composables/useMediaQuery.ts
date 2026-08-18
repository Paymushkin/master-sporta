import { onMounted, onUnmounted, ref } from 'vue';

export function useMediaQuery(query: string) {
    const matches = ref(false);

    const update = () => {
        matches.value = window.matchMedia(query).matches;
    };

    onMounted(() => {
        const media = window.matchMedia(query);
        matches.value = media.matches;
        media.addEventListener('change', update);
        onUnmounted(() => media.removeEventListener('change', update));
    });

    return matches;
}
