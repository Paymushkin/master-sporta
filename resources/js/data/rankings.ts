import { athletes } from '@/data/athletes';
import type { RankingFilters, RankingRow } from '@/types';

export const rankingFilters: RankingFilters = {
    country: 'Россия',
    weight: '67 кг',
    discipline: 'К1',
    ageGroup: '14–15 лет',
    season: 'Сезон 2026',
};

export const rankingRows: RankingRow[] = athletes.map((athlete) => ({
    position: athlete.categoryRank,
    athleteId: athlete.id,
    name: athlete.shortName,
    club: athlete.club,
    points: athlete.points,
    trend: athlete.ratingHistory.length
        ? athlete.ratingHistory[athlete.ratingHistory.length - 2] -
          athlete.ratingHistory[athlete.ratingHistory.length - 1]
        : 0,
}));

export const rankingThesis = 'Каждый официальный результат становится частью спортивной истории';
