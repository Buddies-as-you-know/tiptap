import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TwitterIcon from '@material-ui/icons/Twitter'
import React, { FC } from 'react'

const useStyles = makeStyles((theme) => ({
   button: {
      color: '#fff',
      margin: theme.spacing(1),
      background: 'rgba(29,161,242,1.00)',
      '&:hover': {
         background: 'rgba(29,161,242,1.00)',
      },
      fontWeight: 'bold',
      textTransform: 'lowercase',
   },
}))

type Props = {
   text: string
   link: string
   hashtags: string
}

const TweetButton: FC<Props> = (props) => {
   const classes = useStyles()
   const { text, link, hashtags } = props
   const encodeText = encodeURIComponent(text)
   const encodeLink = encodeURIComponent(`\n\n${link}`)
   const encodeHashtags = encodeURIComponent(hashtags)

   const goTwitter = () => {
      const url = `https://twitter.com/intent/tweet?text=${encodeText}&url=${encodeLink}&hashtags=${encodeHashtags}`
      const option = 'status=1,width=818,height=400,top=100,left=100'
      window.open(url, 'twitter', option)
   }

   return (
      <>
         <Button
            variant="contained"
            size="small"
            onClick={goTwitter}
            className={classes.button}
            startIcon={<TwitterIcon />}
         >
            tweet
         </Button>
      </>
   )
}

export default TweetButton
