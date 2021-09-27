import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
   countUp: () => void
}


const TapButton: FC<Props> = (props) => {
   const { countUp } = props

   return (
      <>
      <TapButtonBase onClick={countUp}>
         <TapButtonTop></TapButtonTop>
         <TapButtonBottom></TapButtonBottom>
      </TapButtonBase>
      </>
   )
}

export default TapButton

const TapButtonBase = styled.a `
   position: relative;
   display: block;
   width: 200px;
   height: 130px;
   margin: 0 auto; 
   `

const TapButtonTop = styled.span `
   position: absolute;
   top: 0;
   left: 20px;
   width: 160px;
   height: 60px;
   margin-top: 30px;

   border-radius: 0 0 50% 50%;
   background: #d62d2d;
   z-index: 1000;

   &::before {
      position: absolute;
      top: -30px;
      left: 0;
      width: 160px;
      height: 60px;
      content: "";
      border-radius: 80px / 30px;
      background: #ed4c4c;
   }

   &:active {
      top: 20px;
      height: 40px;
      transition: 0s;
   }    

   span {
      font-size: 38px;
      font-weight: bold;
    
      position: absolute;
      top: -24px;
      left: 0;
    
      width: 100%;
    
      -webkit-transform: scaleY(0.75);
    
      transform: scaleY(0.75);
      text-align: center;
    
      color: #f6a3a3;
   }
   `

const TapButtonBottom = styled.span `
   position: absolute;
   top: 38px;
   left: 0;

   width: 200px;
   height: 80px;

   border-radius: 100px / 40px;
   background: #d8e4ea;
   -webkit-box-shadow: 0 8px 0 #c4cacc;
   box-shadow: 0 8px 0 #c4cacc;
   span {
      font-size: 38px;
      font-weight: bold;
    
      position: absolute;
      top: -24px;
      left: 0;
    
      width: 100%;
    
      -webkit-transform: scaleY(0.75);
    
      transform: scaleY(0.75);
      text-align: center;
    
      color: #f6a3a3;
      z-index: 1000;
   }
   `
