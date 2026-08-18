import type {
    AgeGroupStat,
    FederationKpi,
    RegionActivity,
    YearlyStat,
} from '@/types';

export const federationKpis: FederationKpi[] = [
    { value: 124560, label: 'Спортсменов' },
    { value: 4820, label: 'Тренеров' },
    { value: 2340, label: 'Клубов' },
    { value: 82, label: 'Региона' },
    { value: 356, label: 'Соревнований' },
];

export const athletesByYear: YearlyStat[] = [
    { year: '2021', value: 82000 },
    { year: '2022', value: 91000 },
    { year: '2023', value: 102400 },
    { year: '2024', value: 113200 },
    { year: '2025', value: 120800 },
    { year: '2026', value: 124560 },
];

export const ageGroups: AgeGroupStat[] = [
    { label: '7–9', value: 18 },
    { label: '10–13', value: 24 },
    { label: '14–15', value: 16 },
    { label: '16–17', value: 14 },
    { label: '18–21', value: 12 },
    { label: '22+', value: 16 },
];

export const regionActivity: RegionActivity[] = [
    { name: 'Москва', clubs: 124, athletes: 8420, intensity: 96 },
    { name: 'Санкт-Петербург', clubs: 86, athletes: 5310, intensity: 78 },
    { name: 'Краснодарский край', clubs: 64, athletes: 4180, intensity: 71 },
    { name: 'Татарстан', clubs: 41, athletes: 2960, intensity: 58 },
    { name: 'Свердловская обл.', clubs: 38, athletes: 2540, intensity: 52 },
    { name: 'Ростовская обл.', clubs: 33, athletes: 2210, intensity: 47 },
    { name: 'Новосибирская обл.', clubs: 29, athletes: 1980, intensity: 41 },
    { name: 'Приморский край', clubs: 18, athletes: 1120, intensity: 28 },
];

export const clubDistribution = [
    { label: 'ЦФО', value: 38 },
    { label: 'СЗФО', value: 16 },
    { label: 'ЮФО', value: 14 },
    { label: 'ПФО', value: 13 },
    { label: 'УрФО', value: 8 },
    { label: 'СФО', value: 7 },
    { label: 'ДФО', value: 4 },
];

export const recentFederationEvents = [
    { name: 'Чемпионат России', city: 'Москва', date: '15–16 июня', status: 'Итоги' },
    { name: 'Первенство ЮФО', city: 'Краснодар', date: '8–9 мая', status: 'Итоги' },
    { name: 'Кубок Сибири', city: 'Новосибирск', date: '21–22 июня', status: 'Скоро' },
    { name: 'Мемориал Победы', city: 'Казань', date: '4–5 июля', status: 'Скоро' },
];
