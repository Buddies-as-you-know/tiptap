import React, { FC, useEffect, useState, createContext } from 'react'

import { Api } from '../../action/action'
import ThemeListTemplate from '../templates/themeListTemplate'

type ContextProps = {
   themeList: any
   handleGetThemes: (name: string | undefined) => void
}

export const ThemeListContext = createContext({} as ContextProps)

const Themes: FC = () => {
   const [themeList, setThemeList] = useState<any>()

   const handleGetThemes = (name: string | undefined) => {
      const headers = JSON.parse(
         localStorage.getItem('headerUserInfo') as string
      )
      Api.getThemes(name, headers).then((res: any) => {
         setThemeList(res)
      })
   }

   useEffect(() => {
      handleGetThemes(undefined)
   }, [])

   console.log({ themeList })

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
