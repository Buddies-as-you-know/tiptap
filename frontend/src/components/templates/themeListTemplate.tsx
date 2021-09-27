import { makeStyles } from '@material-ui/core'
import React, { FC } from 'react'

import FloatingButton from '../uiParts/floatingButton'
import SearchAppBar from '../uiParts/searchAppBar'
import ThemeListCards from '../uiParts/themeListCards'
import ThemeListTitle from '../uiParts/themeListTitle'

const useStyles = makeStyles({
   root: {},
   content: {
      height: '100%',
      marginTop: '70px',
      overflowY: 'scroll',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
   title: {
      margin: '4px',
   },
   cards: {},
})
// TODO 全体的なスタイル調整
const ThemeListTemplate: FC = () => {
   const classes = useStyles()

   return (
      <div className={classes.root}>
         <SearchAppBar />
         <FloatingButton />
         <div className={classes.content}>
            <div>
               <div className={classes.title}>
                  <ThemeListTitle />
               </div>
               <div className={classes.cards}>
                  <ThemeListCards />
               </div>
            </div>
         </div>
      </div>
   )
}
export default ThemeListTemplate
