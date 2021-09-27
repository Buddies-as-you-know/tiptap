require 'csv'

# User.create({name: "otaka", email: "otaka@fuga.com", counts: 0})
# User.create({name: "hosoisan", email: "hosoisan@fuga.com", counts: 0})
# User.create({name: "junior", email: "junior@fuga.com", counts: 0})
# Theme.create({ user_id: 1, name: 'おたかvsほそいさん', rooms_num: 2, close_time: 1632550340, is_closed: false})
# Theme.create({ user_id: 2, name: 'ジュニア', rooms_num: 1, close_time: 1632550350, is_closed: false})
# Room.create({theme_id: 1, name:"おたか"})
# Room.create({theme_id: 1, name:"ほそいさん"})
# Room.create({theme_id: 2, name:"junior"})
# UserTap.create({user_id: 3, room_id:1, counts: 10})
# UserTap.create({user_id: 3, room_id:1, counts: 15})
# UserTap.create({user_id: 3, room_id:2, counts: 10})
# UserTap.create({user_id: 3, room_id:2, counts: 10})
# UserTap.create({user_id: 3, room_id:2, counts: 10})
# UserTap.create({user_id: 1, room_id:3, counts: 25})

ActiveRecord::Base.transaction do
  CSV.foreach('db/users.csv') do |row|
    User.create(
      name: row[0],
      email: row[1],
      counts: row[2],
    )
  end
  CSV.foreach('db/rooms.csv') do |row|
    Room.create(
      theme_id: row[0],
      name: row[1],
    )
  end
  CSV.foreach('db/themes.csv') do |row|
    theme = Theme.create(
      user_id: row[0],
      name: row[1],
      rooms_num: row[2],
      close_time: row[3],
      is_closed: row[4],
    )
  end
  CSV.foreach('db/user_taps.csv') do |row|
    UserTap.create(
      user_id: row[0],
      room_id: row[1],
      counts: row[2],
    )
  end
end
