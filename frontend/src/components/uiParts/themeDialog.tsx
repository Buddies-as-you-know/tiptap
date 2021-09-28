import { Theme, makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import React, { FC, useState, useContext } from 'react'
import { Api } from 'src/action/action'
import { sendSuccess, sendError } from 'src/alert/swalAlertContent'
import { PostTheme } from 'src/domain/postThemes'
import { FormatCheckService } from 'src/services/formatCheckService'
import swal from 'sweetalert'

import Themes from '../../utils/theme'
import { ThemeListContext } from '../pages/themes'

import ThemeForm from './themeForm'

const useStyles = makeStyles<Theme>(() => ({
   font: {
      fontFamily: Themes.font.fontFamily,
   },
}))

const initialPostThemeData: PostTheme = {
   name: '',
   rooms_num: 1,
   duration: 20,
   rooms: [{ name: '' }],
}
const ThemeDialog: FC<any> = (props) => {
   const classes = useStyles()
   const { open, handleDialogClose } = props
   const { handleGetThemes } = useContext(ThemeListContext)
   const [postThemeData, setPostThemeData] =
      useState<PostTheme>(initialPostThemeData)
   const formatCheckService = new FormatCheckService()

   const handlePostTheme = () => {
      const headers = JSON.parse(
         localStorage.getItem('headerUserInfo') as string
      )
      Api.postThemes(postThemeData, headers).then((res: any) => {
         if (res) {
            swal(sendSuccess).then(() => {
               handleGetThemes(undefined)
               handleDialogClose()
            })
         } else {
            swal(sendError)
         }
      })
   }

   return (
      <div>
         <Dialog
            open={open}
            onClose={handleDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
         >
            <DialogTitle id="alert-dialog-title">
               <span className={classes.font}> テーマ投稿</span>
            </DialogTitle>
            <DialogContent>
               <DialogContentText id="alert-dialog-description">
                  <ThemeForm
                     postThemeData={postThemeData}
                     setPostThemeData={setPostThemeData}
                  />
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button
                  onClick={handleDialogClose}
                  color="primary"
                  className={classes.font}
               >
                  閉じる
               </Button>
               <Button
                  disabled={
                     !(
                        formatCheckService.LengthCheck(postThemeData.name) &&
                        postThemeData.rooms.every((v) =>
                           formatCheckService.LengthCheck(v.name)
                        )
                     )
                  }
                  onClick={handlePostTheme}
                  color="primary"
                  className={classes.font}
                  autoFocus
               >
                  投稿
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   )
}

export default ThemeDialog
