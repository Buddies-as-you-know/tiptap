import { Box, Button } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import SyncIcon from '@material-ui/icons/Sync';

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

const useStyles = makeStyles((theme: Theme) => ({
   root: {
      position: 'fixed',
      zIndex: 1000,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
   },
   floatButton: {
      position: "fixed",
      right: "50px",
      bottom: "20px",
      zIndex: 200,
      ...theme.typography.button,
   }
}))

const maxes = [10, 30, 50, 100]

// TODO 全体的なスタイル調整
const ThemeTemplate: FC<Props> = (props) => {
   const classes = useStyles()
   const theme = props.theme
   const [taps, setTaps] = useState<number>(0)
   const [max, setMax] = useState<number>(10)
   const [progress, setProgress] = useState<number>(0)
   const [room, setRoom] = useState<number>(0)

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

   const changeRoom = () => {
      setRoom( (room + 1) % theme.rooms_num )
      setTaps(0)
      setProgress(0)
      console.log(room)
   }

   return (
      <>
         <div className={classes.root}>
            <Box mb={3}><TapButton countUp={countUp}></TapButton></Box>
            <Box mb={3}><TapsProgressBar progress={progress} max={max}></TapsProgressBar></Box>
         </div>
         <div className={classes.floatButton}>
            { theme.rooms_num != 1 && <Button color="secondary" size='medium' onClick={changeRoom}><SyncIcon/>陣営を変更</Button>}
         </div>
      </>
   )
}
export default ThemeTemplate
