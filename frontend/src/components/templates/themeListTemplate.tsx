import { makeStyles } from '@material-ui/core'
import React, { FC } from 'react'

import FloatingButton from '../uiParts/floatingButton'
import ThemeListCards from '../uiParts/themeListCards'

const useStyles = makeStyles({
   root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
})
// TODO 全体的なスタイル調整
const ThemeListTemplate: FC = () => {
   const classes = useStyles()

   return (
      <div className={classes.root}>
         ThemeList Page
         <ThemeListCards />
         <FloatingButton />
      </div>
   )
}
export default ThemeListTemplate
