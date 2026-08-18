import type { Club, Region } from '@/types';

export const regions: Region[] = [
    { id: 'moscow', name: 'Москва', shortName: 'МОСКВА', clubs: 124, athletes: 8420, coaches: 356, lat: 55.7558, lng: 37.6173, x: 27.8, y: 54, active: true },
    { id: 'spb', name: 'Санкт-Петербург', shortName: 'САНКТ-ПЕТЕРБУРГ', clubs: 86, athletes: 5310, coaches: 214, lat: 59.9343, lng: 30.3351, x: 23.6, y: 38, active: true },
    { id: 'krasnodar', name: 'Краснодарский край', shortName: 'КРАСНОДАРСКИЙ КРАЙ', clubs: 64, athletes: 4180, coaches: 168, lat: 45.0355, lng: 38.9753, x: 22.5, y: 74, active: true },
    { id: 'tatarstan', name: 'Татарстан', shortName: 'ТАТАРСТАН', clubs: 41, athletes: 2960, coaches: 122, lat: 55.7963, lng: 49.1088, x: 34.2, y: 51, active: true },
    { id: 'sverdlovsk', name: 'Свердловская область', shortName: 'СВЕРДЛОВСКАЯ ОБЛ.', clubs: 38, athletes: 2540, coaches: 110, lat: 56.8389, lng: 60.6057, x: 42.5, y: 48, active: true },
    { id: 'novosibirsk', name: 'Новосибирская область', shortName: 'НОВОСИБИРСК', clubs: 29, athletes: 1980, coaches: 84, lat: 55.0084, lng: 82.9357, x: 54.8, y: 54, active: true },
    { id: 'rostov', name: 'Ростовская область', shortName: 'РОСТОВСКАЯ ОБЛ.', clubs: 33, athletes: 2210, coaches: 97, lat: 47.2357, lng: 39.7015, x: 24.8, y: 68, active: true },
    { id: 'primorye', name: 'Приморский край', shortName: 'ПРИМОРСКИЙ КРАЙ', clubs: 18, athletes: 1120, coaches: 46, lat: 43.1155, lng: 131.8855, x: 86.5, y: 68, active: true },
];

export const clubs: Club[] = [
    {
        id: 'vityaz',
        name: 'Витязь',
        city: 'Москва',
        regionId: 'moscow',
        coaches: 8,
        athletes: 164,
        ageGroups: ['7–9', '10–13', '14–15', '16–17', '18+'],
        directions: ['К1', 'Low kick', 'Full contact'],
        address: 'Москва, демонстрационный адрес',
        phone: '+7 (000) 000-00-00',
    },
    {
        id: 'sparta',
        name: 'Спарта',
        city: 'Санкт-Петербург',
        regionId: 'spb',
        coaches: 6,
        athletes: 128,
        ageGroups: ['10–13', '14–15', '16–17', '18+'],
        directions: ['К1', 'Light contact'],
        address: 'Санкт-Петербург, демонстрационный адрес',
        phone: '+7 (000) 000-00-00',
    },
    {
        id: 'olimp',
        name: 'Олимп',
        city: 'Казань',
        regionId: 'tatarstan',
        coaches: 5,
        athletes: 96,
        ageGroups: ['7–9', '10–13', '14–15', '16–17'],
        directions: ['Point fighting', 'К1'],
        address: 'Казань, демонстрационный адрес',
        phone: '+7 (000) 000-00-00',
    },
    {
        id: 'legion',
        name: 'Легион',
        city: 'Краснодар',
        regionId: 'krasnodar',
        coaches: 7,
        athletes: 142,
        ageGroups: ['10–13', '14–15', '16–17', '18+'],
        directions: ['К1', 'Low kick'],
        address: 'Краснодар, демонстрационный адрес',
        phone: '+7 (000) 000-00-00',
    },
];

export const featuredClub = clubs[0];

export const clubSearchSteps = ['Найти клуб', 'Выбрать тренера', 'Записаться'];
