import type { Coach } from '@/types';

export const featuredCoach: Coach = {
    id: 'sergeev',
    name: 'Сергеев Андрей Викторович',
    initials: 'СА',
    club: 'Витязь',
    city: 'Москва',
    experience: '18 лет',
    athletes: 42,
    directions: ['К1', 'Low kick', 'Full contact'],
};

export const coaches: Coach[] = [
    featuredCoach,
    {
        id: 'kuznetsov',
        name: 'Кузнецов Дмитрий Игоревич',
        initials: 'КД',
        club: 'Спарта',
        city: 'Санкт-Петербург',
        experience: '12 лет',
        athletes: 31,
        directions: ['К1', 'Light contact'],
    },
    {
        id: 'nikolaeva',
        name: 'Николаева Елена Сергеевна',
        initials: 'НЕ',
        club: 'Олимп',
        city: 'Казань',
        experience: '15 лет',
        athletes: 27,
        directions: ['Point fighting', 'К1'],
    },
];
