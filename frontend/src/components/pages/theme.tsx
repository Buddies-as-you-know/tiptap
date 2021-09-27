import React, { FC } from 'react'

import { theme_with_single_room_closed, theme_with_two_room_closed, theme_with_single_room, theme_with_two_room } from "../../mocks/mockData";
import RoomResultTemplate from '../templates/roomResultTemplate'
import ThemeTemplate from '../templates/themeTemplate'

const Theme: FC = () => {
   return (
   <>
   {theme.is_closed
      ? <RoomResultTemplate theme_result={ theme }/>
      : <ThemeTemplate theme ={theme}/>
   }
   </>
   )
}

export default Theme
