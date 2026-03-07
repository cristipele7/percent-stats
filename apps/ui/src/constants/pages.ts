export const PAGES = {
    Default: '/',
    Home: '/home',
    Admin: '/admin',
    Leagues: '/leagues',
}

export type PagesType = (typeof PAGES)[keyof typeof PAGES]
