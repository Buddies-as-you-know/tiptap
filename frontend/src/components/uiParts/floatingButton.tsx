import Fab from '@material-ui/core/Fab'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import moment from 'moment'
import React, { useState, FC } from 'react'

const useStyles = makeStyles((theme) => ({
   root: {
      position: 'fixed',
      zIndex: 1000,
      bottom: '5%',
      right: '5%',
   },
   margin: {
      margin: theme.spacing(1),
   },
   addIcon: {
      marginRight: theme.spacing(1),
   },
}))

const FloatingButton: FC = () => {
   const classes = useStyles()
   const [open, setOpen] = useState<boolean>(false)

   const handleClickOpen = () => {
      setOpen(!open)
   }

   return (
      <div className={classes.root}>
         <Fab
            variant="extended"
            color="primary"
            aria-label="add"
            className={classes.margin}
            onClick={handleClickOpen}
         >
            <AddIcon className={classes.addIcon} />
            テーマを投稿する
         </Fab>
      </div>
   )
}

export default FloatingButton
