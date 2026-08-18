export interface NavItem {
    label: string;
    href: string;
}

export interface Athlete {
    id: string;
    firstName: string;
    lastName: string;
    shortName: string;
    initials: string;
    ageGroup: string;
    weight: string;
    discipline: string;
    club: string;
    clubCity: string;
    coach: string;
    rank: string;
    fights: number;
    wins: number;
    nationalRank: number;
    categoryRank: number;
    points: number;
    ratingHistory: number[];
    achievements: string[];
    recentResults: CompetitionResult[];
    region: string;
}

export interface CompetitionResult {
    name: string;
    place: string;
    date: string;
    city: string;
}

export interface Coach {
    id: string;
    name: string;
    initials: string;
    club: string;
    city: string;
    experience: string;
    athletes: number;
    directions: string[];
}

export interface Club {
    id: string;
    name: string;
    city: string;
    regionId: string;
    coaches: number;
    athletes: number;
    ageGroups: string[];
    directions: string[];
    address: string;
    phone: string;
}

export interface Region {
    id: string;
    name: string;
    shortName: string;
    clubs: number;
    athletes: number;
    coaches: number;
    lat: number;
    lng: number;
    x: number;
    y: number;
    active: boolean;
}

export interface Competition {
    id: string;
    title: string;
    city: string;
    dates: string;
    status: 'upcoming' | 'live' | 'finished';
    participants: number;
    categories: number;
    overview: string;
    schedule: ScheduleItem[];
    documents: string[];
    brackets: BracketFight[];
}

export interface ScheduleItem {
    time: string;
    title: string;
    place: string;
}

export interface BracketFight {
    id: string;
    round: string;
    red: string;
    blue: string;
    result?: string;
}

export interface RankingRow {
    position: number;
    athleteId: string;
    name: string;
    club: string;
    points: number;
    trend: number;
}

export interface RankingFilters {
    country: string;
    weight: string;
    discipline: string;
    ageGroup: string;
    season: string;
}

export interface FederationKpi {
    value: number;
    label: string;
    hint?: string;
}

export interface AgeGroupStat {
    label: string;
    value: number;
}

export interface YearlyStat {
    year: string;
    value: number;
}

export interface RegionActivity {
    name: string;
    clubs: number;
    athletes: number;
    intensity: number;
}

export interface RoadmapStage {
    id: string;
    stage: string;
    title: string;
    items: string[];
    active: boolean;
}

export interface EcosystemNode {
    id: string;
    label: string;
}

export interface SportDirection {
    id: string;
    label: string;
}
