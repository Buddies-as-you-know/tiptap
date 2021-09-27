import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import moment from 'moment'
import React, { useState, FC } from 'react'

const useStyles = makeStyles((theme) => ({
   margin: {
      margin: theme.spacing(1),
   },
   addIcon: {
      marginRight: theme.spacing(1),
   },
}))

const ThemeForm: FC = (props) => {
   const classes = useStyles()
   const [isPopup, setIsPopup] = useState<boolean>(false)

   return (
      <Fab
         variant="extended"
         color="primary"
         aria-label="add"
         className={classes.margin}
         onClick={() => {
            setIsPopup(!isPopup)
         }}
      >
         <AddIcon className={classes.addIcon} />
         テーマを投稿する
      </Fab>
   )
}

export default ThemeForm
