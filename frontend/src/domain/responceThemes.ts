export type ResponceThemes = {
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
        time_series?: {
           num: number
           counts:number
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
