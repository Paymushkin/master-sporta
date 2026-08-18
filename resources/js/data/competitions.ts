import type { Competition } from '@/types';

export const featuredCompetition: Competition = {
    id: 'russia-championship-2026',
    title: 'Чемпионат России по кикбоксингу',
    city: 'Москва',
    dates: '15–16 июня',
    status: 'finished',
    participants: 486,
    categories: 32,
    overview:
        'Главный старт сезона. Результаты автоматически попадают в профили спортсменов, рейтинги и статистику Федерации.',
    schedule: [
        { time: '09:00', title: 'Взвешивание и мандатная комиссия', place: 'Зал A' },
        { time: '11:00', title: 'Предварительные бои, день 1', place: 'Ринг 1–3' },
        { time: '16:00', title: 'Полуфиналы', place: 'Центральный ринг' },
        { time: '18:30', title: 'Финалы и награждение', place: 'Центральный ринг' },
    ],
    documents: ['Регламент', 'Список участников', 'Протоколы', 'Итоговые результаты'],
    brackets: [
        { round: '1/4', red: 'Иванов И.', blue: 'Орлов Н.', result: 'Иванов И.' },
        { round: '1/2', red: 'Иванов И.', blue: 'Сидоров М.', result: 'Иванов И.' },
        { round: 'Финал', red: 'Иванов И.', blue: 'Петров А.', result: 'Иванов И.' },
    ],
};

export const competitionFlow = [
    'Соревнование',
    'Результат',
    'Профиль спортсмена',
    'Статистика',
    'Рейтинг',
];
