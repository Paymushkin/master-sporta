import type { EcosystemNode, RoadmapStage, SportDirection } from '@/types';

export const ecosystemChain: EcosystemNode[] = [
    { id: 'athlete', label: 'Спортсмен' },
    { id: 'coach', label: 'Тренер' },
    { id: 'club', label: 'Клуб' },
    { id: 'region', label: 'Регион' },
    { id: 'event', label: 'Соревнование' },
    { id: 'result', label: 'Результат' },
];

export const mvpItems = [
    { id: '01', title: 'Спортсмены' },
    { id: '02', title: 'Тренеры' },
    { id: '03', title: 'Клубы' },
    { id: '04', title: 'Карта клубов' },
    { id: '05', title: 'Календарь соревнований' },
    { id: '06', title: 'Кабинет Федерации' },
    { id: '07', title: 'Базовая аналитика' },
];

export const roadmap: RoadmapStage[] = [
    {
        id: '01',
        stage: 'Этап 01',
        title: 'Фундамент',
        items: ['Спортсмены', 'Тренеры', 'Клубы', 'Карта', 'Календарь', 'Федерация'],
        active: true,
    },
    {
        id: '02',
        stage: 'Этап 02',
        title: 'Спортивная карьера',
        items: ['Результаты', 'Статистика', 'Рейтинги', 'Достижения'],
        active: false,
    },
    {
        id: '03',
        stage: 'Этап 03',
        title: 'Соревнования',
        items: ['Регистрация', 'Жеребьёвка', 'Сетки', 'Протоколы', 'LIVE'],
        active: false,
    },
    {
        id: '04',
        stage: 'Этап 04',
        title: 'Экосистема',
        items: ['Академия', 'Сборы', 'Трансляции', 'Партнёры', 'AI'],
        active: false,
    },
];

export const coreEntities: EcosystemNode[] = [
    { id: 'athletes', label: 'Спортсмены' },
    { id: 'coaches', label: 'Тренеры' },
    { id: 'clubs', label: 'Клубы' },
    { id: 'events', label: 'Соревнования' },
    { id: 'results', label: 'Результаты' },
    { id: 'docs', label: 'Документы' },
    { id: 'analytics', label: 'Аналитика' },
];

export const sportDirections: SportDirection[] = [
    { id: 'kickboxing', label: 'Кикбоксинг' },
    { id: 'boxing', label: 'Бокс' },
    { id: 'sambo', label: 'Самбо' },
    { id: 'judo', label: 'Дзюдо' },
    { id: 'karate', label: 'Карате' },
    { id: 'tkd', label: 'Тхэквондо' },
    { id: 'other', label: 'Другие виды спорта' },
];

export const audienceJourney = [
    'Увидел бой',
    'Нашёл спортсмена',
    'Узнал тренера',
    'Нашёл клуб',
    'Записался',
];
