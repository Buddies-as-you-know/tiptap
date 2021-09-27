import { Box, LinearProgress, Typography } from '@material-ui/core'
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import React, { FC } from 'react'


type Props = {
   progress: number
   max: number
}

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }),
)(LinearProgress);

const TapsProgressBar: FC<Props> = (props) => {
   const { progress, max } = props
   console.log(progress)

   return (
      <>
         <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
               <BorderLinearProgress variant="determinate" value={progress} />
            </Box>
            <Box minWidth={35}>
               <Typography variant="body2" color="textSecondary">
                  {`| ${max}`}
               </Typography>
            </Box>
         </Box>
      </>
   )
}
export default TapsProgressBar
