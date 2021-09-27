import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { FC, useState } from 'react'

import TapButton from '../uiParts/tapButton'
import TapsProgressBar from '../uiParts/tapsProgressBar'

type Props = {
   theme: {
      name: string
      rooms_num: number
      close_time: number
      is_closed: boolean
      user_id: number
      created_at: number
      rooms: {
         id: number
         name: string
         total_counts: number
         user_room_total_taps: number
         time_series?: {
            num: number
            counts:number
         }[]
         taps_ranking?: {
            1: { 
               name: string
               total_taps: number 
            }
            2: { 
               name: string
               total_taps: number 
            }
            3: { 
               name: string
               total_taps: number 
            }
         }
      }[]
   }
}

const useStyles = makeStyles(() => ({
   root: {
      position: 'fixed',
      zIndex: 1000,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
   },
}))

const maxes = [10, 30, 50, 100]

// TODO 全体的なスタイル調整
const ThemeTemplate: FC<Props> = (props) => {
   const classes = useStyles()
   const theme = props.theme
   const [taps, setTaps] = useState<number>(0)
   const [max, setMax] = useState<number>(10)
   const [progress, setProgress] = useState<number>(0)
   const countUp = () => {
      setTaps(taps + 1)
      console.log(taps)
      if (taps >= max) {
         // =========
         // taps POSTしてあげる
         //
         setTaps(0)
         setMax(maxes[Math.floor(Math.random() * maxes.length)])
      }
      setProgress(taps / max * 100)
   }

   return (
      <>
         <div className={classes.root}>
            <Box mb={3}><TapButton countUp={countUp}></TapButton></Box>
            <Box mb={3}><TapsProgressBar progress={progress} max={max}></TapsProgressBar></Box>
         </div>
      </>
   )
}
export default ThemeTemplate
