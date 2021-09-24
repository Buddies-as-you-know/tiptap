class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.int :theme_id
      t.string :name
      t.int :count

      t.timestamps
    end
  end
end
