import { onMounted, onUnmounted, ref } from 'vue';

export function useScrolled(offset = 24) {
    const scrolled = ref(false);

    const onScroll = () => {
        scrolled.value = window.scrollY > offset;
    };

    onMounted(() => {
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        onUnmounted(() => window.removeEventListener('scroll', onScroll));
    });

    return scrolled;
}
