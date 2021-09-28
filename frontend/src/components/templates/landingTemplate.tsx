import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { loginError, fetchError } from 'src/alert/swalAlertContent'
import { UserInfo, LoginInfo } from 'src/domain/userInfo'
import TipTapLogo from 'src/images/TipTap_logo.png'
import swal from 'sweetalert'

import { Api } from '../../action/action'
import { Routes } from '../../domain/router'

const LandingTemplate: FC = () => {
   const history = useHistory()

   const [loginInfo, setLoginInfo] = React.useState<LoginInfo>({
      email: '',
      password: '',
   })
   const [signInName, setSignInName] = React.useState('Sign in')
   const [signInButtonFlag, setSignInButtonFlag] = React.useState(false)
   const [checked, setChecked] = React.useState(false)
   const [values, setValues] = React.useState({
      password: '',
      showPassword: false,
   })
   const handleLoginInfoChange = (name: string) => (event: any) => {
      setLoginInfo({ ...loginInfo, [name]: event.target.value })
   }

   const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword })
   }

   const handleMouseDownPassword = (event: any) => {
      event.preventDefault()
   }

   const loginCheck = () => {
      setSignInName('Signing in...')
      setSignInButtonFlag(true)
      Api.signIn(loginInfo).then((headerUserInfo: any) => {
         if (headerUserInfo) {
            console.log(headerUserInfo)
            const headerUserInfoJson = JSON.stringify(headerUserInfo)
            localStorage.setItem('headerUserInfo', headerUserInfoJson)
            Api.getMyInfo(headerUserInfo).then((myInfo: any) => {
               if (myInfo) {
                  history.push(Routes.themes.path)
               } else {
                  swal(fetchError)
                  setSignInName('Sign in')
                  setSignInButtonFlag(false)
               }
            })
         } else {
            swal(loginError)
            setSignInName('Sign in')
            setSignInButtonFlag(false)
         }
      })
   }

   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '165px 20px',
            zIndex: 1000,
         }}
      >
         <img style={{ height: '40%', width: '300px' }} src={TipTapLogo} />
         <Typography
            component="h3"
            variant="h4"
            style={{ margin: '25px auto', fontSize: '1.725rem' }}
         >
            Sign in to TipTap
         </Typography>
         <Card variant="outlined">
            {/* {linearAnimation && <LinearProgress />} */}
            <CardContent>
               <form style={{ width: '100%' }} noValidate>
                  <TextField
                     margin="normal"
                     //required
                     variant="outlined"
                     fullWidth
                     id="email"
                     label="メールアドレス"
                     name="email"
                     //autoComplete="id"
                     inputProps={{ style: { padding: '15px 13px' } }}
                     onChange={handleLoginInfoChange('email')}
                     //autoFocus
                  />
                  <div style={{ margin: '8px 0px' }}>
                     <FormControl variant="outlined" style={{ width: '100%' }}>
                        <InputLabel htmlFor="outlined-adornment-password">
                           パスワード
                        </InputLabel>
                        <OutlinedInput
                           fullWidth
                           label="パスワード"
                           labelWidth={80}
                           inputProps={{
                              style: { padding: '15px 13px' },
                           }}
                           type={values.showPassword ? 'text' : 'password'}
                           onChange={handleLoginInfoChange('password')}
                           endAdornment={
                              <InputAdornment position="end">
                                 <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                 >
                                    {values.showPassword ? (
                                       <Visibility />
                                    ) : (
                                       <VisibilityOff />
                                    )}
                                 </IconButton>
                              </InputAdornment>
                           }
                        />
                     </FormControl>
                  </div>
               </form>
            </CardContent>
            <CardActions style={{ padding: '16px' }}>
               <Button
                  type="button"
                  color="primary"
                  fullWidth
                  style={{ fontWeight: 'bold' }}
                  variant="contained"
                  onClick={loginCheck}
                  disabled={signInButtonFlag}
               >
                  {signInName}{' '}
               </Button>
               <br />
            </CardActions>
            <div style={{ position: 'fixed', bottom: 0, right: '3%' }}>
               Ver.1.0.0
            </div>
         </Card>
      </div>
   )
}
export default LandingTemplate
