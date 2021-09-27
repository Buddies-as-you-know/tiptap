import React, { FC, useEffect, useState, createContext } from 'react'

import { Api } from '../../action/action'
import { themes } from '../../mocks/mockData'
import ThemeListTemplate from '../templates/themeListTemplate'

type ContextProps = {
   themeList: any
}

export const ThemeListContext = createContext({} as ContextProps)

const ThemeList: FC = () => {
   const [themeList, setThemeList] = useState<any>(themes)

   useEffect(() => {
      // Api.getThemes(undefined).then((res: any) => {
      //    setThemeList(res)
      // })
   }, [])

   console.log(themeList)
   return (
      <div>
         {themeList && (
            <ThemeListContext.Provider value={{ themeList }}>
               <ThemeListTemplate />
            </ThemeListContext.Provider>
         )}
      </div>
   )
}

export default ThemeList
