// Read Only
export const Routes = {
   landing: { title: 'ランディングページ', path: '/' },
   roomList: { title: 'ルームリストページ', path: '/roomList' },
   room: { title: 'ルームページ', path: '/roomList/room' },
} as const

export type Routes = typeof Routes[keyof typeof Routes]
