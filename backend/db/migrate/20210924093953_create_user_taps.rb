class CreateUserTaps < ActiveRecord::Migration[6.1]
  def change
    create_table :user_taps do |t|
      t.int :user_id
      t.int :room_id
      t.int :count

      t.timestamps
    end
  end
end
