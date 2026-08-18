import { nextTick, watch, type Ref } from 'vue';

export function useBodyScrollLock(locked: Ref<boolean>) {
    watch(
        locked,
        async (value) => {
            await nextTick();
            document.body.style.overflow = value ? 'hidden' : '';
        },
        { immediate: true },
    );
}
