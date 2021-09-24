export {}
import moment from 'moment'

export const users = {
   id: 0,
   name: 'asahara',
   email: 'test@gmail.com',
   hogehoge_id: '000',
   created_at: String(moment('2021-09-22T09:30:00').unix()),
   updated_at: String(moment('2021-09-22T09:30:00').unix()),
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
