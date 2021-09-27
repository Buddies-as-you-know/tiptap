import React, { FC, useEffect, useState, createContext } from 'react'

import { Api } from '../../action/action'
import {
   Theme,
   theme_with_single_room_closed,
   theme_with_two_room_closed,
   theme_with_single_room,
   theme_with_two_room,
} from '../../mocks/mockData'
import RoomResultTemplate from '../templates/roomResultTemplate'
import ThemeListTemplate from '../templates/themeListTemplate'
import ThemeTemplate from '../templates/themeTemplate'

type ContextProps = {
   themeList: any
   handleGetThemes: (name: string | undefined) => void
}

export const ThemeListContext = createContext({} as ContextProps)

const Themes: FC = () => {
   const [themeList, setThemeList] = useState<any>(Theme)
   const [theme, setTheme] = useState<any>(0)
   // const [themeOpen, setThemeOpen] = useState<boolean>(false)

   const handleGetThemes = (name: string | undefined) => {
      Api.getThemes(name).then((res: any) => {
         setThemeList(res)
      })
   }

   // const handleOpenCloseTheme = () => {
   //    setThemeOpen(!themeOpen)
   // }

   useEffect(() => {
      // handleGetThemes(undefined)
   }, [])

   console.log(themeList)
   return (
      <div>
         {themeList && (
            <ThemeListContext.Provider value={{ themeList, handleGetThemes }}>
               <ThemeListTemplate />
            </ThemeListContext.Provider>
         )}
      </div>
   )
}

export default Themes

//  {
//     !themeOpen ? ( //テーマリスト表示
//        <ThemeListTemplate />
//     ) : (
//        <>
//           {theme.is_closed ? (
//              <RoomResultTemplate theme_result={theme} />
//           ) : (
//              <ThemeTemplate theme={theme} />
//           )}
//        </>
//     )
//  }
