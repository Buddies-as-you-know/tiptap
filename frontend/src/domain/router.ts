// Read Only
export const Routes = {
   landing: { title: 'ランディングページ', path: '/' },
   themeList: { title: 'テーマリストページ', path: '/themeList' },
   theme: { title: 'テーマページ', path: '/themeList/theme' },
   themeBackground: {
      title: 'テーマの背景ページ(最終的には消す)',
      path: '/themeBackground',
   },
} as const

export type Routes = typeof Routes[keyof typeof Routes]
