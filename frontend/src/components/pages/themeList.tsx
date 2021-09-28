import React, { FC, useEffect, useState, createContext } from 'react'

import { Api } from '../../action/action'
import { Theme } from '../../mocks/mockData'
import ThemeListTemplate from '../templates/themeListTemplate'

type ContextProps = {
   themeList: any
   handleGetThemes: (name: string | undefined) => void
}

export const ThemeListContext = createContext({} as ContextProps)

const ThemeList: FC = () => {
   const [themeList, setThemeList] = useState<any>(Theme)

   const handleGetThemes = (name: string | undefined) => {
      Api.getThemes(name).then((res: any) => {
         setThemeList(res)
      })
   }

   useEffect(() => {
      handleGetThemes(undefined)
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

export default ThemeList
