class CreateThemes < ActiveRecord::Migration[6.1]
  def change
    create_table :themes do |t|
      t.int :user_id
      t.string :name
      t.int :rooms_num
      t.int :close_time
      t.bool :is_closed

      t.timestamps
    end
  end
end
