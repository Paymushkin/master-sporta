import type { NavItem } from '@/types';

export const mainNav: NavItem[] = [
    { label: 'Спортсмены', href: '#athletes' },
    { label: 'Тренеры', href: '#coaches' },
    { label: 'Клубы', href: '#clubs' },
    { label: 'Соревнования', href: '#competitions' },
    { label: 'Регионы', href: '#regions' },
    { label: 'Документы', href: '#documents' },
    { label: 'Академия', href: '#academy' },
];

export const footerPlatform: NavItem[] = [
    { label: 'Спортсмены', href: '#athletes' },
    { label: 'Тренеры', href: '#coaches' },
    { label: 'Клубы', href: '#clubs' },
    { label: 'Соревнования', href: '#competitions' },
];

export const footerInfo: NavItem[] = [
    { label: 'Регионы', href: '#regions' },
    { label: 'Документы', href: '#documents' },
    { label: 'Статистика', href: '#news' },
    { label: 'Академия', href: '#academy' },
];

export const footerLegal: NavItem[] = [
    { label: 'Оферта', href: '#offer' },
    { label: 'Обработка персональных данных', href: '#privacy' },
];

export const footerSupport: NavItem[] = [
    { label: 'Контакты', href: '#contacts' },
    { label: 'Вопросы и ответы', href: '#contacts' },
    { label: 'Обратная связь', href: '#contacts' },
];

export interface SocialLink {
    id: 'vk' | 'rutube' | 'max' | 'ok';
    label: string;
    href: string;
}

export const footerSocials: SocialLink[] = [
    { id: 'vk', label: 'ВКонтакте', href: '#contacts' },
    { id: 'rutube', label: 'Rutube', href: '#contacts' },
    { id: 'max', label: 'MAX', href: '#contacts' },
    { id: 'ok', label: 'Одноклассники', href: '#contacts' },
];
