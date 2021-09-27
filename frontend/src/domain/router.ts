// Read Only
export const Routes = {
   landing: { title: 'ランディングページ', path: '/' },
   themeList: { title: 'テーマリストページ', path: '/themeList' },
   theme: { title: 'テーマページ', path: '/themeList/theme' },
} as const

export type Routes = typeof Routes[keyof typeof Routes]
