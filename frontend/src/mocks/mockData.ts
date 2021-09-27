export {}
import moment from 'moment'
import { ThemeList } from 'src/domain/themes'

export const users = {
   id: 0,
   name: 'asahara',
   email: 'test@gmail.com',
   hogehoge_id: '000',
   created_at: moment('2021-09-22T09:30:00').unix(),
   updated_at: moment('2021-09-22T09:30:00').unix(),
}

export const themes: ThemeList = {
   searched_themes: [
      {
         id: 0,
         user_id: 0,
         name: '阪神vs巨人',
         rooms_num: 0,
         close_time: moment('2021-09-22T09:30:00').unix(),
         is_closed: true,
      },
      {
         id: 1,
         user_id: 0,
         name: '阪神vs巨人',
         rooms_num: 0,
         close_time: moment('2021-09-22T09:30:00').unix(),
         is_closed: true,
      },
      {
         id: 2,
         user_id: 0,
         name: '阪神vs巨人',
         rooms_num: 0,
         close_time: moment('2021-09-22T09:30:00').unix(),
         is_closed: true,
      },
      {
         id: 3,
         user_id: 0,
         name: '阪神vs巨人',
         rooms_num: 0,
         close_time: moment('2021-09-22T09:30:00').unix(),
         is_closed: true,
      },
   ],
}

// Table "users" {
//   "id" int
//   "name" string
//   "email" string
//   "hogehoge_id" string
//   "created_at" datetime
//   "updated_at" datetime
// }

// Table "user_taps" {
//   "user_id" int [ref:> users.id]
//   "room_id" int [ref:> rooms.id]
//   "counts" int
//   "created_at" datetime
// }

// Table "themes" {
//   "id" int
//   "created_by" int [ref:> users.id]
//   "name" string
//   "rooms_num" int
//   "close_time" datetime
// }

// Table "rooms" {
//   "id" int
//   "theme_id" int [ref:> themes.id]
//   "name" string
// }
