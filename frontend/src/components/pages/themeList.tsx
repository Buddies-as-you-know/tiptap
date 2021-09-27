import React, { FC, useEffect, useState } from 'react'

import { Api } from '../../action/action'
import ThemeListTemplate from '../templates/themeListTemplate'

const ThemeList: FC = () => {
   const [themeList, setThemeList] = useState<any>()

   useEffect(() => {
      Api.getTemes(undefined).then((res: any) => {
         setThemeList(res)
      })
   }, [])

   console.log(themeList)
   return <ThemeListTemplate />
}

export default ThemeList
