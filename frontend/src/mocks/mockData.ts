export {}
import moment from 'moment'
import { ThemeList } from 'src/domain/postThemes'

export const users = {
   id: 0,
   name: 'asahara',
   email: 'test@gmail.com',
   hogehoge_id: '000',
   created_at: moment('2021-09-22T09:30:00').unix(),
   updated_at: moment('2021-09-22T09:30:00').unix(),
}

// export const themes: ThemeList = {
//    searched_themes: [
//       {
//          id: 0,
//          user_id: 0,
//          name: '阪神vs巨人',
//          rooms_num: 0,
//          close_time: moment('2021-09-22T09:30:00').unix(),
//          is_closed: true,
//       },
//       {
//          id: 1,
//          user_id: 0,
//          name: '阪神vs巨人',
//          rooms_num: 0,
//          close_time: moment('2021-09-22T09:30:00').unix(),
//          is_closed: true,
//       },
//       {
//          id: 2,
//          user_id: 0,
//          name: '阪神vs巨人',
//          rooms_num: 0,
//          close_time: moment('2021-09-22T09:30:00').unix(),
//          is_closed: true,
//       },
//       {
//          id: 3,
//          user_id: 0,
//          name: '阪神vs巨人',
//          rooms_num: 0,
//          close_time: moment('2021-09-22T09:30:00').unix(),
//          is_closed: true,
//       },
//    ],
// }

export const Theme: ThemeList = {
   searched_themes: [
      {
         id: 0,
         user_id: 0,
         name: '阪神vs巨人',
         rooms_num: 2,
         duration: 20,
         total_counts: 300,
         close_time: moment('2021-09-28T17:10:00').unix(),
         is_closed: true,
      },
      {
         id: 1,
         user_id: 0,
         name: '鬼滅の刃',
         rooms_num: 1,
         duration: 20,
         total_counts: 300,
         close_time: moment('2021-09-28T17:50:30').unix(),
         is_closed: true,
      },
      {
         id: 2,
         user_id: 0,
         name: '阪神vs巨人',
         rooms_num: 2,
         duration: 20,
         total_counts: 300,

         close_time: moment('2021-09-22T09:30:00').unix(),
         is_closed: false,
      },
      {
         id: 3,
         user_id: 0,
         name: '阪神vs巨人',
         rooms_num: 2,
         duration: 20,
         total_counts: 300,

         close_time: moment('2021-09-22T09:30:00').unix(),
         is_closed: false,
      },
      {
         id: 4,
         user_id: 0,
         name: '阪神vs巨人',
         rooms_num: 2,
         duration: 20,
         total_counts: 300,

         close_time: moment('2021-09-22T09:30:00').unix(),
         is_closed: false,
      },
      {
         id: 5,
         user_id: 0,
         name: '阪神vs巨人',
         rooms_num: 2,
         duration: 20,
         total_counts: 300,

         close_time: moment('2021-09-22T09:30:00').unix(),
         is_closed: false,
      },
      {
         id: 6,
         user_id: 0,
         name: '阪神vs巨人',
         rooms_num: 2,
         duration: 20,
         total_counts: 300,

         close_time: moment('2021-09-22T09:30:00').unix(),
         is_closed: false,
      },
      {
         id: 7,
         user_id: 0,
         name: '阪神vs巨人',
         rooms_num: 2,
         duration: 20,
         total_counts: 300,
         close_time: moment('2021-09-22T09:30:00').unix(),
         is_closed: false,
      },
   ],
}

export const theme_with_single_room_closed = {
   name: '楽天インターン',
   rooms_num: 1,
   close_time: moment('2021-09-22T10:10:00').unix(),
   is_closed: true,
   user_id: 1,
   created_at: moment('2021-09-22T09:25:00').unix(),
   rooms: [
      {
         id: 1,
         name: '楽天インターン',
         total_counts: 220,
         user_room_total_taps: 30,
         enthusiastic_close_time: moment('2021-09-22T09:25:00').unix(),
         tap_speed: 5.5,
         time_series: [
            { num: 1, counts: 30 },
            { num: 2, counts: 10 },
            { num: 3, counts: 10 },
            { num: 4, counts: 40 },
            { num: 5, counts: 40 },
            { num: 6, counts: 60 },
            { num: 7, counts: 10 },
            { num: 8, counts: 10 },
            { num: 9, counts: 10 },
         ],
         taps_ranking: {
            1: { name: 'ほげほげ', total_taps: 1000 },
            2: { name: 'ぽけぽけ', total_taps: 200 },
            3: { name: 'こほこほ', total_taps: 130 },
         },
      },
   ],
}

export const theme_with_two_room_closed = {
   name: '阪神×楽天',
   rooms_num: 2,
   close_time: moment('2021-09-22T10:10:00').unix(),
   is_closed: true,
   user_id: 1,
   created_at: moment('2021-09-22T09:25:00').unix(),
   rooms: [
      {
         id: 1,
         name: '楽天',
         total_counts: 220,
         user_room_total_taps: 30,
         enthusiastic_close_time: moment('2021-09-22T09:25:00').unix(),
         tap_speed: 5.5,
         time_series: [
            { num: 1, counts: 30 },
            { num: 2, counts: 10 },
            { num: 3, counts: 10 },
            { num: 4, counts: 40 },
            { num: 5, counts: 40 },
            { num: 6, counts: 60 },
            { num: 7, counts: 10 },
            { num: 8, counts: 10 },
            { num: 9, counts: 10 },
         ],
         taps_ranking: {
            1: { name: 'ほげほげ', total_taps: 1000 },
            2: { name: 'ぽけぽけ', total_taps: 200 },
            3: { name: 'こほこほ', total_taps: 130 },
         },
      },
      {
         id: 1,
         name: '楽天',
         total_counts: 220,
         user_room_total_taps: 30,
         enthusiastic_close_time: moment('2021-09-22T09:25:00').unix(),
         tap_speed: 5.5,
         time_series: [
            { num: 1, counts: 30 },
            { num: 2, counts: 10 },
            { num: 3, counts: 10 },
            { num: 4, counts: 40 },
            { num: 5, counts: 40 },
            { num: 6, counts: 60 },
            { num: 7, counts: 10 },
            { num: 8, counts: 10 },
            { num: 9, counts: 10 },
         ],
         taps_ranking: {
            1: { name: 'ほげほげ', total_taps: 500 },
            2: { name: 'ぽけぽけ', total_taps: 100 },
            3: { name: 'こほこほ', total_taps: 80 },
         },
      },
   ],
}

export const theme_with_single_room = {
   name: '楽天インターン',
   rooms_num: 1,
   close_time: moment('2021-09-22T10:10:00').unix(),
   is_closed: false,
   user_id: 1,
   created_at: moment('2021-09-22T09:25:00').unix(),
   rooms: [
      {
         id: 1,
         name: '楽天インターン',
         total_counts: 220,
         user_room_total_taps: 30,
         tap_speed: 5.5,
         enthusiastic_close_time: moment('2021-09-30T09:25:00').unix(),
      },
   ],
}

export const theme_with_two_room = {
   name: '阪神×楽天',
   rooms_num: 2,
   close_time: moment('2021-09-22T10:10:00').unix(),
   is_closed: false,
   user_id: 1,
   created_at: moment('2021-09-22T09:25:00').unix(),
   rooms: [
      {
         id: 1,
         name: '楽天',
         total_counts: 220,
         user_room_total_taps: 30,
         tap_speed: 10.8,
         enthusiastic_close_time: moment('2021-09-22T09:30:00').unix(),
      },
      {
         id: 2,
         name: '阪神',
         total_counts: 220,
         tap_speed: 0.2,
         user_room_total_taps: 30,
         enthusiastic_close_time: moment('2021-09-30T09:25:00').unix(),
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
