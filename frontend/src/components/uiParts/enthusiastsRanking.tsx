import { Grid } from '@material-ui/core'
import React, { FC } from 'react'

type Props = {
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
}

const TapsLineChart: FC<Props> = (props) => {
   const { taps_ranking } = props

   return (
      <>
         <Grid container direction="column" alignItems="center">
            <Grid item>
               <h1>熱狂ランキング</h1>
            </Grid>
            <Grid container>
               <Grid item xs={2}>
                  <div>1位: </div>
               </Grid>
               <Grid item xs={6}>
                  <div>{taps_ranking[1].name}</div>
               </Grid>
               <Grid item xs={4}>
                  <div>{taps_ranking[1].total_taps}</div>
               </Grid>
            </Grid>
            <Grid container>
               <Grid item xs={2}>
                  <div>2位: </div>
               </Grid>
               <Grid item xs={6}>
                  <div>{taps_ranking[2].name}</div>
               </Grid>
               <Grid item xs={4}>
                  <div>{taps_ranking[2].total_taps}</div>
               </Grid>
            </Grid>
            <Grid container>
               <Grid item xs={2}>
                  <div>3位: </div>
               </Grid>
               <Grid item xs={6}>
                  <div>{taps_ranking[3].name}</div>
               </Grid>
               <Grid item xs={4}>
                  <div>{taps_ranking[3].total_taps}</div>
               </Grid>
            </Grid>
         </Grid>
      </>
   )
}
export default TapsLineChart
