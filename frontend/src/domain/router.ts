// Read Only
export const Routes = {
   landing: { title: 'ランディングページ', path: '/' },
} as const

export type Routes = typeof Routes[keyof typeof Routes]
