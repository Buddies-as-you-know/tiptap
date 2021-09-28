require 'csv'
require 'securerandom'

ActiveRecord::Base.transaction do
  CSV.foreach('db/users.csv') do |row|
    User.create!(
      name: row[0],
      email: row[1],
      password: row[2],
    )
  end
  CSV.foreach('db/themes.csv') do |row|
    theme = Theme.new(
      user_id: row[0],
      name: row[1],
      rooms_num: row[2],
      close_time: Time.new(2021, 9, 28, 2, 0, 0, '+00:00'),
      is_closed: row[4],
      created_at: Time.new(2021, 9, 28, 1, 0, 0, '+00:00')
    )
    User.find_or_create_by(id: row[0]).themes << theme
    theme.save!
  end
  CSV.foreach('db/rooms.csv') do |row|
    room = Room.new(
      theme_id: row[0],
      name: row[1],
    )
    Theme.find_or_create_by(id: row[0]).rooms << room
    room.save!
  end
  (1..500).each{|num|
    user_id = SecureRandom.random_number(6)+1
    room_id = SecureRandom.random_number(2)+1
    user_tap = UserTap.new(
      user_id: user_id,
      room_id: room_id,
      counts: 10,
      created_at: Time.new(2021, 9, 28, 1, 0, 0, '+00:00')+ SecureRandom.random_number(1*60*60),
    )
    user = User.find_or_create_by(id: user_id)
    user.update(counts: user.counts+room_id)
    user.user_taps << user_tap
    room = Room.find_or_create_by(id: room_id)
    room.update(counts: room.counts+10)
    room.user_taps << user_tap
    user_tap.save!}
end
