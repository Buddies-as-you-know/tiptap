// Read Only
export const Routes = {
   landing: { title: 'ランディングページ', path: '/' },
   themes: { title: 'テーマリストページ', path: '/themes' },
   theme: { title: 'テーマページ', path: '/themes/:id' },
   themeBackground: {
      title: 'テーマの背景ページ(最終的には消す)',
      path: '/themeBackground',
   },
} as const

export type Routes = typeof Routes[keyof typeof Routes]
