import React, { FC } from 'react'

import { theme_with_single_room_closed, theme_with_two_room_closed } from "../../mocks/mockData";
import RoomResultTemplate from '../templates/roomResultTemplate'
import ThemeTemplate from '../templates/themeTemplate'

const Theme: FC = () => {
   return (
   <>
   {theme_with_single_room_closed.is_closed
      ? <RoomResultTemplate theme_result={ theme_with_two_room_closed }/>
      : <ThemeTemplate />
   }
   </>
   )
}

export default Theme
