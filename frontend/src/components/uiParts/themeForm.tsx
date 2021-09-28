import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Fab from '@material-ui/core/Fab'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import React, { useState, FC } from 'react'
import { PostTheme } from 'src/domain/postThemes'

const useStyles = makeStyles((theme) => ({
   formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
   },
   textField: {
      margin: '4px 0px',
   },
}))

type Props = {
   postThemeData: PostTheme
   setPostThemeData: (post: PostTheme) => void
}

const ThemeForm: FC<Props> = (props) => {
   const classes = useStyles()
   const { postThemeData, setPostThemeData } = props
   const [checked, setChecked] = useState<boolean>(false)

   const handleCheckedChange = (event: any) => {
      setChecked(event.target.checked)
      if (event.target.checked) {
         setPostThemeData({
            ...postThemeData,
            rooms_num: 2,
            rooms: [{ name: '' }, { name: '' }],
         })
      } else {
         setPostThemeData({
            ...postThemeData,
            rooms_num: 1,
            rooms: [{ name: postThemeData.name }],
         })
      }
   }

   const handleChange = (name: string) => (event: any) => {
      if (name == '0' || name == '1') {
         const roomArray = { ...postThemeData }.rooms
         roomArray[name] = {
            name: event.target.value,
         }
         setPostThemeData({
            ...postThemeData,
            rooms: roomArray,
         })
      } else {
         if (checked || name == 'duration') {
            setPostThemeData({
               ...postThemeData,
               [name]: event.target.value,
            })
         } else {
            setPostThemeData({
               ...postThemeData,
               [name]: event.target.value,
               rooms: [{ name: event.target.value }],
            })
         }
      }
   }

   console.log(postThemeData)
   return (
      <div>
         <TextField
            id="filled-theme-input"
            label="お題"
            variant="outlined"
            className={classes.textField}
            onChange={handleChange('name')}
         />
         <FormControlLabel
            control={
               <Checkbox
                  checked={checked}
                  onChange={handleCheckedChange}
                  color="primary"
               />
            }
            label="競争ルームを作成しますか？"
            className={classes.textField}
         />
         <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">
               終了期間
            </InputLabel>
            <Select
               labelId="demo-simple-select-helper-label"
               id="demo-simple-select-helper"
               value={postThemeData.duration}
               onChange={handleChange('duration')}
            >
               <MenuItem value={20}>20second</MenuItem>
               <MenuItem value={60}>1minute</MenuItem>
               <MenuItem value={60 * 3}>3minute</MenuItem>
               <MenuItem value={60 * 30}>30minute</MenuItem>
               <MenuItem value={60 * 60}>1hour</MenuItem>
               <MenuItem value={24 * 3600}>24hour</MenuItem>
               <MenuItem value={24 * 3600 * 7}>7day</MenuItem>
               <MenuItem value={24 * 3600 * 30}>30day</MenuItem>
            </Select>
         </FormControl>
         {checked && (
            <div>
               <TextField
                  id="filled-room1-input"
                  label="ルーム名1"
                  variant="outlined"
                  className={classes.textField}
                  onChange={handleChange('0')}
               />
               <TextField
                  id="filled-room2-input"
                  label="ルーム名2"
                  variant="outlined"
                  className={classes.textField}
                  onChange={handleChange('1')}
               />
            </div>
         )}
      </div>
   )
}

export default ThemeForm
