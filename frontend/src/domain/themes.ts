export type SearchedThemes = {
   id: number
   user_id: number
   name: string
   rooms_num: number
   close_time: number
   is_closed: boolean
}

export type ThemeList = {
   searched_themes: SearchedThemes[]
}
