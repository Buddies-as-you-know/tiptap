import moment from 'moment'

export class TimeCalService {
   //残り時間(unixtime)をリターン
   public LeaveTime(closeTime: number): number {
      const result = moment(closeTime * 1000).unix() - moment().unix()
      return result
   }
   //残り時間(unixtime)をリターン
   public DisplayLeaveTime(unixTime: number): string {
      const currentTime = moment()
      const closeTime = moment(unixTime * 1000)
      const duration = this.LeaveTime(unixTime)
      console.log(duration)
      if (duration < 0) {
         return '終了'
      } else if (duration >= 0 && duration < 60) {
         return closeTime.diff(currentTime, 'seconds') + '秒'
      } else if (duration >= 60 && duration < 3600) {
         return closeTime.diff(currentTime, 'minutes') + '分'
      } else {
         return closeTime.diff(currentTime, 'hours') + '時間'
      }
   }
   //時間が過ぎたかどうか(unixtime)をリターン
   public IsPassed(closeTime: number): boolean {
      const result = closeTime - moment().unix()
      if (result > 0) {
         return false
      }
      return true
   }
}
