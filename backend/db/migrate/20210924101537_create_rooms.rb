class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.references :theme
      t.string :name
      t.integer :count, null: false, default: 0

      t.timestamps
    end
  end
end