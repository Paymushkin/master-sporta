/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_NAME: string;
    readonly VITE_YANDEX_MAPS_API_KEY?: string;
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue';

    const component: DefineComponent<object, object, unknown>;
    export default component;
}
