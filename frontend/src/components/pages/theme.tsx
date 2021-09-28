import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Api } from '../../action/action'
import RoomResultTemplate from '../templates/roomResultTemplate'
import ThemeTemplate from '../templates/themeTemplate'

const Theme: FC = () => {
   const { id } = useParams<any>()
   const [theme, setTheme] = useState<any>()

   useEffect(() => {
      const headers = JSON.parse(
         localStorage.getItem('headerUserInfo') as string
      )
      console.log(theme)
      // if (!theme.is_closed) {
      setInterval(() => {
         console.log('フェッチ')
         Api.getTheme(id, headers).then((res: any) => {
            console.log(res)
            setTheme(res)
         })
         // const headers = JSON.parse(
         //    localStorage.getItem('headerUserInfo') as string
         // )
         // Api.getThemes(undefined, headers).then((res: any) => {
         //    setTheme(res)
         // })
         // setTheme(theme_with_two_room)
         //console.log('load theme')
      }, 5000)
      // } else {
      //    Api.getTheme(id, headers).then((res: any) => {
      //       setTheme(res)
      //    })
      // }
   }, [])

   console.log({ theme })

   return (
      <>
         {theme && (
            <>
               {theme.is_closed ? (
                  <RoomResultTemplate theme_result={theme} />
               ) : (
                  <ThemeTemplate theme={theme} />
               )}
            </>
         )}
      </>
   )
}

export default Theme
