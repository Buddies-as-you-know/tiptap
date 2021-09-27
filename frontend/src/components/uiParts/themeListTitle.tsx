import { makeStyles } from '@material-ui/core/styles'
import React, { useState, FC } from 'react'

import Themes from '../../utils/theme'

const useStyles = makeStyles(() => ({
   title: {
      fontFamily: Themes.font.fontFamily,
      fontWeight: 'bold',
      fontSize: '20px',
      borderBottom: ' 1px solid',
      display: 'inline-block',
   },
}))

const ThemeListTitle: FC = () => {
   const classes = useStyles()

   return <div className={classes.title}>急上昇テーマ</div>
}
export default ThemeListTitle
