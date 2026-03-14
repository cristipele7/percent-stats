export const PAGES = {
    Default: '/',
    Home: '/home',
    Admin: '/admin',
    Leagues: '/leagues',
    Teams: '/teams',
    Matches: '/matches',
    Match: '/match',
}

export type PagesType = (typeof PAGES)[keyof typeof PAGES]
