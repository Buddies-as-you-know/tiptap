require 'csv'

ActiveRecord::Base.transaction do
  CSV.foreach('db/users.csv') do |row|
    User.create!(
      name: row[0],
      email: row[1],
      password: row[2],
      counts: row[3],
    )
  end
  CSV.foreach('db/themes.csv') do |row|
    theme = Theme.create!(
      user_id: row[0],
      name: row[1],
      rooms_num: row[2],
      close_time: row[3],
      is_closed: row[4],
    )
  end
  CSV.foreach('db/rooms.csv') do |row|
    Room.create!(
      theme_id: row[0],
      name: row[1],
    )
  end
  CSV.foreach('db/user_taps.csv') do |row|
    UserTap.create!(
      user_id: row[0],
      room_id: row[1],
      counts: row[2],
    )
  end
end
