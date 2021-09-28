import React, { useState, FC } from 'react'
import styled from 'styled-components'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
type Props = {
   text: string
   children?: Element
}
const CompetitionLabel: FC<Props> = (props) => {
   return (
      <RibbonWrapper>
         <Ribbon>
            <span>{props.text}</span>
         </Ribbon>
      </RibbonWrapper>
   )
}

export default CompetitionLabel

const RibbonWrapper = styled.div`
   display: block;
   position: relative;
   margin: 15px auto;
   padding: 10px 0;
   width: 300px;
   background: #f1f1f1;
   box-sizing: border-box;
`
const Ribbon = styled.div`
   display: inline-block;
   position: absolute;
   top: -6px;
   right: 10px;
   margin: 0;
   padding: 10px 0 7px;
   z-index: 2;
   width: 40px;
   text-align: center;
   color: white;
   font-size: 13px;
   background: #fa8383;
   border-radius: 2px 0 0 0;
   ::before {
      position: absolute;
      content: '';
      top: 0;
      right: -5px;
      border: none;
      border-bottom: solid 6px #d07676;
      border-right: solid 5px transparent;
   }
   ::after {
      content: '';
      position: absolute;
      left: 0;
      top: 100%;
      height: 0;
      width: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 10px solid #fa8383;
   }
`
