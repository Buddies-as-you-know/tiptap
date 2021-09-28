import React, { useState, FC } from 'react'
import styled from 'styled-components'

const ThemeBackground: FC = () => {
   const [open, setOpen] = useState<boolean>(false)
   const depth = 130

   // cssなのでstringにしています
   return <Ocean depth={String(depth)} >
      <Wave></Wave>
   </Ocean>
}

export default ThemeBackground

const Ocean = styled.div<{ depth: string }>`
height: 15%;
width:100%;
position:absolute;
bottom:0;
left:0;
background: #015871;
`

const Wave = styled.div`
background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x; 
background-size: 300px 12px;
position: absolute;
top: -12px;
width: 6400px;
height: 30px;
animation: wave 60s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
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
