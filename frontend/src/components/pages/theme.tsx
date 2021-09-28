import React, { FC, useEffect, useState } from 'react'

import { Api } from '../../action/action'
import { theme_with_two_room } from '../../mocks/mockData'
import RoomResultTemplate from '../templates/roomResultTemplate'
import ThemeTemplate from '../templates/themeTemplate'

const Theme: FC = () => {
   const [theme, setTheme] = useState<any>(0)

   useEffect(() => {
      setInterval(() => {
         const headers = JSON.parse(
            localStorage.getItem('headerUserInfo') as string
         )
         Api.getThemes(undefined, headers).then((res: any) => {
            setTheme(res)
         })
         setTheme(theme_with_two_room)
         console.log('load theme')
      }, 5000)
   }, [])

   return (
      <>
         {theme.is_closed ? (
            <RoomResultTemplate theme_result={theme} />
         ) : (
            <ThemeTemplate theme={theme} />
         )}
      </>
   )
}

export default Theme
