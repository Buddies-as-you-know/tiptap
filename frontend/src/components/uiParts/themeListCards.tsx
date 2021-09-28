import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { id } from 'date-fns/esm/locale'
import React, { FC, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { SearchedThemes } from '../../domain/postThemes'
import { Routes } from '../../domain/router'
import { ThemeListContext } from '../pages/themes'

const useStyles = makeStyles({
   root: {
      minWidth: 345,
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
   const classes = useStyles()
   const history = useHistory()
   const { themeList } = useContext(ThemeListContext)
   console.log(themeList)

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
                     <Button
                        size="small"
                        color="primary"
                        className={classes.actions}
                        onClick={() => {
                           history.push(
                              Routes.themes.path + '/' + String(value.id)
                           )
                        }}
                     >
                        テーマを覗く
                     </Button>
                  </CardActions>
               </Card>
            )
         })}
      </>
   )
}

export default ThemeListCards
