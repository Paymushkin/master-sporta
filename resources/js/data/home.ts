import avatarKozlov from '@/assets/avatars/kozlov.jpg';
import avatarOrlov from '@/assets/avatars/orlov.jpg';
import avatarPetrov from '@/assets/avatars/petrov.jpg';
import avatarSokolov from '@/assets/avatars/sokolov.jpg';
import avatarVolkov from '@/assets/avatars/volkov.jpg';
import { publicUrl } from '@/lib/publicUrl';

export interface HeroStat {
    value: number;
    label: string;
}

export interface QuickLink {
    id: string;
    title: string;
    description: string;
    href: string;
}

export interface UpcomingEvent {
    id: string;
    dateStart: string;
    dateEnd: string;
    month: string;
    badge: string;
    badgeTone: 'pink' | 'blue' | 'navy';
    title: string;
    city: string;
    status: string;
}

export interface TopAthletePreview {
    id: string;
    place: number;
    name: string;
    city: string;
    initials: string;
    rating: number;
    image: string;
}

export const heroStats: HeroStat[] = [
    { value: 45231, label: 'Спортсмен' },
    { value: 8547, label: 'Тренеров' },
    { value: 3214, label: 'Клубов' },
    { value: 89, label: 'Регионов' },
    { value: 1256, label: 'Соревнований в год' },
];

export const quickLinks: QuickLink[] = [
    {
        id: 'athletes',
        title: 'Спортсмены',
        description: 'Профили, разряды, результаты, достижения',
        href: '#athletes',
    },
    {
        id: 'coaches',
        title: 'Тренеры',
        description: 'Специализация, ученики и клубы',
        href: '#coaches',
    },
    {
        id: 'clubs',
        title: 'Клубы',
        description: 'Найти секцию рядом и записаться',
        href: '#clubs',
    },
    {
        id: 'competitions',
        title: 'Соревнования',
        description: 'Календарь, регистрация и результаты',
        href: '#competitions',
    },
    {
        id: 'regions',
        title: 'Регионы',
        description: 'Карта кикбоксинга по всей стране',
        href: '#clubs',
    },
];

export const upcomingEvents: UpcomingEvent[] = [
    {
        id: 'kazan-2026',
        dateStart: '22',
        dateEnd: '25',
        month: 'мая',
        badge: 'Чемпионат России',
        badgeTone: 'pink',
        title: 'Чемпионат России по кикбоксингу 2026',
        city: 'г. Казань',
        status: 'Регистрация открыта',
    },
    {
        id: 'moscow-cup',
        dateStart: '12',
        dateEnd: '13',
        month: 'апр',
        badge: 'Кубок',
        badgeTone: 'blue',
        title: 'Кубок Москвы по кикбоксингу',
        city: 'г. Москва',
        status: 'Регистрация открыта',
    },
    {
        id: 'sochi-open',
        dateStart: '08',
        dateEnd: '09',
        month: 'мая',
        badge: 'Первенство России',
        badgeTone: 'blue',
        title: 'Первенство России среди юниоров',
        city: 'г. Сочи',
        status: 'Регистрация скоро',
    },
];

export const topAthletesPreview: TopAthletePreview[] = [
    { id: 'petrov', place: 1, name: 'Александр Петров', city: 'г. Москва', initials: 'АП', rating: 1250, image: avatarPetrov },
    { id: 'sokolov', place: 2, name: 'Дмитрий Соколов', city: 'г. Казань', initials: 'ДС', rating: 1184, image: avatarSokolov },
    { id: 'kozlov', place: 3, name: 'Иван Козлов', city: 'г. Санкт-Петербург', initials: 'ИК', rating: 1140, image: avatarKozlov },
    { id: 'orlov', place: 4, name: 'Михаил Орлов', city: 'г. Новосибирск', initials: 'МО', rating: 1095, image: avatarOrlov },
    { id: 'volkov', place: 5, name: 'Егор Волков', city: 'г. Краснодар', initials: 'ЕВ', rating: 1042, image: avatarVolkov },
];

export interface FederationNews {
    id: string;
    date: string;
    title: string;
    image: string;
    href: string;
}

export interface FederationDocument {
    id: string;
    title: string;
    meta: string;
    tone: 'red' | 'blue' | 'green';
    href: string;
}

export const federationNews: FederationNews[] = [
    {
        id: 'championship-results',
        date: '15 мая 2024',
        title: 'Подведены итоги Чемпионата России 2026',
        image: publicUrl('images/news-1.jpg'),
        href: '#news',
    },
    {
        id: 'youth-academy',
        date: '8 мая 2024',
        title: 'Стартовал набор в академию кикбоксинга',
        image: publicUrl('images/news-2.jpg'),
        href: '#news',
    },
    {
        id: 'platform-launch',
        date: '22 апреля 2024',
        title: 'Запущена цифровая платформа «Мастер Спорта»',
        image: publicUrl('images/news-3.jpg'),
        href: '#news',
    },
];

export const federationDocuments: FederationDocument[] = [
    {
        id: 'evsk',
        title: 'Единая всероссийская спортивная классификация по кикбоксингу',
        meta: 'PDF, 1.2 МБ',
        tone: 'red',
        href: '#documents',
    },
    {
        id: 'antidoping',
        title: 'Антидопинговые правила',
        meta: 'PDF, 1.1 МБ',
        tone: 'blue',
        href: '#documents',
    },
    {
        id: 'regulations',
        title: 'Регламент проведения соревнований',
        meta: 'PDF, 0.8 МБ',
        tone: 'green',
        href: '#documents',
    },
];
