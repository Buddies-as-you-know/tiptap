import React, { useState, FC } from 'react'
import styled from 'styled-components'

const ThemeBackground: FC = () => {
   const [open, setOpen] = useState<boolean>(false)
   const depth = 130

   // cssなのでstringにしています
   return <Background depth={String(depth)} />
}

export default ThemeBackground

const Background = styled.div<{ depth: string }>`
   ::after {
    content: "";
    position: fixed;
    bottom: 0;
    width: 100%;
    background: rgba(0, 128, 256, 0.3);
    pointer-events: none;
    height:${(props) => props.depth}px;
   }
`
