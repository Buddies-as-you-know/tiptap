import { styled } from '@material-ui/core'
import React, { FC } from 'react'

// TODO 全体的なスタイル調整
// const LandingTemplate: FC = () => {
//    return <div>Landing Page</div>
// }
// export default LandingTemplate
import { makeStyles, Theme } from '@material-ui/core/styles'
import Icon from './TipTap_logo_2.png'

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
            <img src={Icon} alt="アイコン" className={classes.imageStyle} />
         </div>
      </>
   )
}
export default LandingTemplate
