import Fab from '@material-ui/core/Fab'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import moment from 'moment'
import React, { useState, FC } from 'react'
import ThemeDialog from './themeDialog'

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

   const handleDialogOpen = () => {
      setOpen(true)
   }

   const handleDialogClose = () => {
      setOpen(false)
   }
   return (
      <div className={classes.root}>
         <Fab
            variant="extended"
            color="primary"
            aria-label="add"
            className={classes.margin}
            onClick={handleDialogOpen}
         >
            <AddIcon className={classes.addIcon} />
            テーマを投稿する
         </Fab>
         <ThemeDialog
            open={open}
            handleDialogClose={handleDialogClose}
         />
      </div>
   )
}

export default FloatingButton
