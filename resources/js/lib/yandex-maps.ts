export const YANDEX_MAP_WIDGET_URL =
    'https://yandex.ru/map-widget/v1/?ll=99.0%2C63.0&z=3&l=map&scroll=false';

const SCRIPT_ID = 'yandex-maps-jsapi';

export interface YandexMapInstance {
    geoObjects: { add: (object: unknown) => void };
    behaviors: { disable: (name: string | string[]) => void };
    controls: { remove: (name: string) => YandexMapInstance['controls'] };
    container: { fitToViewport: () => void };
    destroy: () => void;
}

export interface YandexMapsApi {
    ready: (callback: () => void) => void;
    Map: new (
        container: HTMLElement | string,
        state: Record<string, unknown>,
        options?: Record<string, unknown>,
    ) => YandexMapInstance;
    Placemark: new (
        coordinates: [number, number],
        properties: Record<string, unknown>,
        options?: Record<string, unknown>,
    ) => unknown;
    templateLayoutFactory: {
        createClass: (template: string) => unknown;
    };
}

declare global {
    interface Window {
        ymaps?: YandexMapsApi;
    }
}

let loading: Promise<YandexMapsApi> | null = null;

export function loadYandexMaps(): Promise<YandexMapsApi> {
    if (window.ymaps) {
        return new Promise((resolve) => {
            window.ymaps!.ready(() => resolve(window.ymaps!));
        });
    }

    if (loading) {
        return loading;
    }

    loading = new Promise((resolve, reject) => {
        const finish = () => {
            if (!window.ymaps) {
                reject(new Error('Yandex Maps API не загрузился'));
                return;
            }

            window.ymaps.ready(() => resolve(window.ymaps!));
        };

        const existing = document.getElementById(SCRIPT_ID);

        if (existing) {
            existing.addEventListener('load', finish, { once: true });
            existing.addEventListener(
                'error',
                () => reject(new Error('Не удалось загрузить Яндекс Карты')),
                { once: true },
            );
            return;
        }

        const params = new URLSearchParams({ lang: 'ru_RU' });
        const apiKey = import.meta.env.VITE_YANDEX_MAPS_API_KEY;

        if (apiKey) {
            params.set('apikey', apiKey);
        }

        const script = document.createElement('script');
        script.id = SCRIPT_ID;
        script.src = `https://api-maps.yandex.ru/2.1/?${params.toString()}`;
        script.async = true;
        script.onload = finish;
        script.onerror = () => {
            loading = null;
            reject(new Error('Не удалось загрузить Яндекс Карты'));
        };
        document.head.appendChild(script);
    });

    return loading;
}
