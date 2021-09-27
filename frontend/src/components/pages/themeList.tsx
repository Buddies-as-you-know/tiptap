import React, { FC, useEffect, useState, createContext } from 'react'

import { Api } from '../../action/action'
import ThemeListTemplate from '../templates/themeListTemplate'


type ContextProps = {
   themeList:any
}

export const ScheduleContext = createContext({} as ContextProps)


const ThemeList: FC = () => {
   const [themeList, setThemeList] = useState<any>()

   useEffect(() => {
      Api.getThemes(undefined).then((res: any) => {
         setThemeList(res)
      })
   }, [])

   console.log(themeList)
   return <ThemeListTemplate />
}

export default ThemeList
