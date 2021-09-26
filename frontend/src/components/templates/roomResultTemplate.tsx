import { Grid, IconButton } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles'
import SyncIcon from '@material-ui/icons/Sync';
import React, { FC, useState } from 'react'


import EnthusiastsRanking from '../uiParts/enthusiastsRanking'
import TapsLineChart from '../uiParts/tapsLineChart'

type Props = {
   theme_result: {
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
         users_taps: { 
            user_id: number
            counts: number
            created_at: number 
         }[],
         taps_ranking: {
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
   floatButton: {
      position: "fixed",
      right: "50px",
      bottom: "20px",
      zIndex: 200,
      ...theme.typography.button,
   }
}))


// TODO 全体的なスタイル調整
const RoomTemplate: FC<Props> = (props) => {
   const theme_result = props.theme_result
   const classes = useStyles()
   const [room, setRoom] = useState<number>(0)

   const changeRoom = () => {
      setRoom( (room + 1) % theme_result.rooms_num )
      console.log(room)
   }

   return (
      <>
         <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>結果</Grid>
            <Grid item>
               <h1>{theme_result.name}</h1>
            </Grid>
            <Grid item>
               <h1>累計タップ数: {theme_result.rooms[room].total_counts}</h1>
            </Grid>
            <Grid item xs={12} sm={6} style={{ width: '100%' }}>
               <TapsLineChart started_at={theme_result.created_at} closed_at={theme_result.close_time} users_taps={theme_result.rooms[room].users_taps}/>
            </Grid>
            <Grid item>
               <EnthusiastsRanking taps_ranking={theme_result.rooms[room].taps_ranking}/>
            </Grid>
         </Grid>
         <div className={classes.floatButton}>
            { theme_result.rooms_num != 1 && <IconButton size='medium' onClick={changeRoom}><SyncIcon/>陣営を変更</IconButton>}
         </div>
      </>
   )
}
export default RoomTemplate
