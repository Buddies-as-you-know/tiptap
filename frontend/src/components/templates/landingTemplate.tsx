import { makeStyles, Theme } from '@material-ui/core/styles'
import React, { FC } from 'react'
import TipTapLogo from 'src/images/TipTap_logo.png'

const useStyles = makeStyles((theme: Theme) => ({
   icon: {
      position: 'fixed',
      right: '50px',
      bottom: '20px',
   },
   imageStyle: {
      width: '30%',
   },
}))

const LandingTemplate: FC = () => {
   const classes = useStyles()
   return (
      <>
         <div>Landing Page</div>
         <div className={classes.icon}>
            <img
               src={TipTapLogo}
               alt="アイコン"
               className={classes.imageStyle}
            />
         </div>
      </>
   )
}
export default LandingTemplate
