import { Grid } from '@material-ui/core';
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
               <Grid item xs={2}><p>1位: </p></Grid>
               <Grid item xs={6}><p>{taps_ranking[1].name}</p></Grid>
               <Grid item xs={4}><p>{taps_ranking[1].total_taps}</p></Grid>
            </Grid>
            <Grid container>
               <Grid item xs={2}><p>2位: </p></Grid>
               <Grid item xs={6}><p>{taps_ranking[2].name}</p></Grid>
               <Grid item xs={4}><p>{taps_ranking[2].total_taps}</p></Grid>
            </Grid>
            <Grid container>
               <Grid item xs={2}><p>3位: </p></Grid>
               <Grid item xs={6}><p>{taps_ranking[3].name}</p></Grid>
               <Grid item xs={4}><p>{taps_ranking[3].total_taps}</p></Grid>
            </Grid>
         </Grid>
      </>
   )
}
export default TapsLineChart
