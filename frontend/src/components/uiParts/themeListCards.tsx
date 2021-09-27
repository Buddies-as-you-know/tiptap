import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { id } from 'date-fns/esm/locale'
import React, { FC, useContext } from 'react'

import { SearchedThemes } from '../../domain/themes'
import { ThemeListContext } from '../pages/themeList'

const useStyles = makeStyles({
   root: {
      minWidth: 275,
      width: '70%',
      margin: '4px',
   },
   title: {
      fontSize: 16,
      fontWeight: 'bold',
   },
   actions: {
      display: 'flex',
      marginLeft: 'auto',
   },
})

const ThemeListCards: FC = (props) => {
   const { themeList } = useContext(ThemeListContext)
   console.log(themeList)
   const classes = useStyles()

   return (
      <>
         {themeList.searched_themes.map((value: SearchedThemes) => {
            return (
               <Card className={classes.root} key={value.id}>
                  <CardContent>
                     <Typography className={classes.title}>
                        {value.name}
                     </Typography>
                  </CardContent>
                  <CardActions>
                     <Button size="small" className={classes.actions}>
                        テーマを見る
                     </Button>
                  </CardActions>
               </Card>
            )
         })}
      </>
   )
}

export default ThemeListCards
