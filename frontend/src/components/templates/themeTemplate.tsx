import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import SyncIcon from '@material-ui/icons/Sync'
import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Api } from 'src/action/action'
import styled from 'styled-components'

import { PostUserTaps } from '../../domain/postUserTaps'
import { Routes } from '../../domain/router'
import { TimeCalService } from '../../services/timeCalService'
import TapButton from '../uiParts/tapButton'
import TapsProgressBar from '../uiParts/tapsProgressBar'
import ThemeBackground from '../uiParts/themeBackground.jsx'

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
         enthusiastic_close_time: number
         tap_speed: number
         time_series?: {
            num: number
            counts: number
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
      position: 'absolute',
      zIndex: 1000,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#333333',
      padding: '10px',
      backgroundColor: '#ffffff',
      borderRadius: '5px',
   },
   floatButton: {
      position: 'absolute',
      right: '50px',
      bottom: '20px',
      zIndex: 200,
      ...theme.typography.button,
   },
   backButton: {
      position: 'fixed',
      left: '25px',
      top: '20px',
      zIndex: 10000,
      backgroundColor: '#ffffff',
      borderRadius: '5px',
      ...theme.typography.button,
   },
}))

const max = 30

// TODO 全体的なスタイル調整
const ThemeTemplate: FC<Props> = (props) => {
   const classes = useStyles()
   const history = useHistory()

   const theme = props.theme
   const [taps, setTaps] = useState<number>(0)
   const [progress, setProgress] = useState<number>(0)
   const [room, setRoom] = useState<number>(0)
   // depthを相対的にする必要あり。
   const [depth, setDepth] = useState<number>(200)

   const countUp = () => {
      setTaps((prev) => prev + 1)
      //console.log(taps)
      if (taps >= max) {
         // POST to user_taps
         const requestParams: PostUserTaps = {
            room_id: theme.rooms[room].id,
            counts: max,
         }
         const headers = JSON.parse(
            localStorage.getItem('headerUserInfo') as string
         )
         Api.postUserTaps(requestParams, headers).then((res: any) => {
            //console.log(res)
         })
         // 後で処理を５秒Fetchに移動させる。
         // setDepth(depth + max)
         setTaps(0)
         setProgress(0)
      } else {
         setProgress((prev) => prev + (1 / max) * 100)
      }
   }

   const timeCalService = new TimeCalService()

   const changeRoom = () => {
      setRoom((room + 1) % theme.rooms_num)
      setTaps(0)
      setProgress(0)
      //console.log(room)
   }

   return (
      <div style={{ overflow: 'hidden', position: 'relative' }}>
         {theme.rooms &&
            timeCalService.IsPassed(
               theme.rooms[room]?.enthusiastic_close_time
            ) && <ThemeBackground />}
         <div style={{ width: '100vw', height: '100vh' }}>
            <div className={classes.root}>
               <Typography noWrap style={{ textAlign: 'center' }}>
                  <h2>{theme.name}</h2>
               </Typography>
               {theme.rooms_num > 1 && (
                  <Typography noWrap style={{ textAlign: 'center' }}>
                     <h2>陣営: {theme.rooms && theme.rooms[room]?.name}</h2>
                  </Typography>
               )}
               <Box mb={3}>
                  <TapButton countUp={countUp}></TapButton>
               </Box>
               <Box mb={3}>
                  <TapsProgressBar
                     progress={progress}
                     max={max}
                  ></TapsProgressBar>
               </Box>
               <Typography noWrap>
                  <h2>
                     合計スコア:{' '}
                     {theme.rooms && theme.rooms[room]?.total_counts + taps}
                  </h2>
               </Typography>
               <Typography noWrap>
                  <h3>
                     自分のスコア:{' '}
                     {theme.rooms &&
                        theme.rooms[room]?.user_room_total_taps + taps}
                  </h3>
               </Typography>
            </div>
            <div className={classes.floatButton}>
               {theme.rooms_num > 1 && (
                  <Button
                     size="medium"
                     onClick={changeRoom}
                     style={{
                        backgroundColor: '#3EDBF0',
                        fontWeight: 'bold',
                        color: '#333333',
                     }}
                  >
                     <SyncIcon />
                     陣営を変更
                  </Button>
               )}
            </div>
            {/* { LeaveTime } */}
         </div>
         <div style={{ overflow: 'hidden' }}>
            <Ocean depth={String(depth)}>
               <Wave></Wave>
            </Ocean>
         </div>
         <div className={classes.backButton}>
            <Button
               color="primary"
               size="medium"
               onClick={() => {
                  history.push(Routes.themes.path)
               }}
            >
               <ArrowBackIosIcon />
               ルームリストに戻る
            </Button>
         </div>
      </div>
   )
}
export default ThemeTemplate

const Ocean = styled.div<{ depth: string }>`
   height: ${(props) => props.depth}px;
   width: 100%;
   position: absolute;
   bottom: 0;
   left: 0;
   background: #015871;
`

const Wave = styled.div`
   background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg)
      repeat-x;
   background-size: 300px 12px;
   position: absolute;
   top: -12px;
   width: 6400px;
   height: 30px;
   animation: wave 20s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
   transform: translate3d(0, 0, 0);
   @keyframes wave {
      0% {
         margin-left: 0;
      }
      100% {
         margin-left: -1600px;
      }
   }
`
