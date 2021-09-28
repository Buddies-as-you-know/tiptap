import { Box, Button } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import SyncIcon from '@material-ui/icons/Sync'
import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Api } from 'src/action/action'
import styled from 'styled-components'

import { PostUserTaps } from '../../domain/postUserTaps'
import { Routes } from '../../domain/router'
import { TimeCalService } from '../../services/timeCalService'
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
         enthusiastic_close_time: number
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
      zIndex: 200,
      ...theme.typography.button,
   },
}))

const maxes = [10, 30, 50, 100]

// TODO 全体的なスタイル調整
const ThemeTemplate: FC<Props> = (props) => {
   const classes = useStyles()
   const history = useHistory()

   const theme = props.theme
   const [taps, setTaps] = useState<number>(0)
   const [max, setMax] = useState<number>(10)
   const [progress, setProgress] = useState<number>(0)
   const [room, setRoom] = useState<number>(0)
   const [depth, setDepth] = useState<number>(0)

   const countUp = () => {
      setTaps(taps + 1)
      console.log(taps)
      if (taps >= max) {
         // =========
         // taps POSTしてあげる
         //
         const requestParams: PostUserTaps = {
            room_id: theme.rooms[room].id,
            counts: max,
         }
         Api.postUserTaps(requestParams).then((res: any) => {
            console.log(res)
         })
         // 後で処理を５秒Fetchに移動させる。
         setDepth(depth + max)
         setTaps(0)
         setMax(maxes[Math.floor(Math.random() * maxes.length)])
      }
      setProgress((taps / max) * 100)
   }

   const timeCalService = new TimeCalService()

   const changeRoom = () => {
      setRoom((room + 1) % theme.rooms_num)
      setTaps(0)
      setProgress(0)
      console.log(room)
      console.log(
         timeCalService.IsPassed(theme.rooms[room].enthusiastic_close_time)
      )
   }

   return (
      <div style={{ overflow: 'hidden', position: 'relative' }}>
         <div style={{ width: '100vw', height: '100vh' }}>
            <div className={classes.root}>
               <Box mb={3}>
                  <TapButton countUp={countUp}></TapButton>
               </Box>
               <Box mb={3}>
                  <TapsProgressBar
                     progress={progress}
                     max={max}
                  ></TapsProgressBar>
               </Box>
            </div>
            <div className={classes.floatButton}>
               {theme.rooms_num != 1 && (
                  <Button color="secondary" size="medium" onClick={changeRoom}>
                     <SyncIcon />
                     陣営を変更
                  </Button>
               )}
            </div>
         </div>
         <div style={{ overflow: 'hidden' }}>
            <Ocean depth={String(depth)}>
               <Wave></Wave>
            </Ocean>
         </div>
         <div className={classes.backButton}>
            {theme.rooms_num != 1 && (
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
            )}
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
   animation: wave 60s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
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
