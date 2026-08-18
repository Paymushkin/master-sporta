import '../css/app.css';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';

const appName = 'Мастер Спорта';
const basePath = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '/';

createInertiaApp({
    title: (title) => (title ? `${title} — ${appName}` : appName),
    page: {
        component: 'Home',
        props: { errors: {} },
        url: basePath,
        version: 'pages',
    },
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob<DefineComponent>('./pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
    progress: {
        color: '#E21D35',
        showSpinner: false,
    },
});
