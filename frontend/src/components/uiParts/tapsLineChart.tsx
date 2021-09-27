import React, { FC } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


type Props = {
   time_series: {
      num: number
      counts: number
   }[]
   started_at: number
   closed_at: number
}

const TapsLineChart: FC<Props> = (props) => {
   const { time_series } = props

   // 時間正規化ロジック
   // const time_span = (closed_at - started_at) / 10

   // let time_max = started_at + time_span

   // users_taps.map((user_tap) => {
   //    if (user_tap.created_at <= time_max)
   // })

   return (
      <>
         <div>
            <ResponsiveContainer width="100%" height="100%" aspect={1.5}>
               <LineChart
                  width={500}
                  height={300}
                  data={time_series}
                  margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5,
                  }}
               >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="created_at" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line name="タップ数" type="monotone" dataKey="counts" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={3} animationDuration={3000} />
               </LineChart>
            </ResponsiveContainer>
         </div>
      </>
   )
}
export default TapsLineChart
