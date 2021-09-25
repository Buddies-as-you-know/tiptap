class CreateThemes < ActiveRecord::Migration[6.1]
  def change
    create_table :themes do |t|
      t.references :user
      t.string :name
      t.integer :rooms_num
      t.integer :close_time
      t.boolean :is_closed

      t.timestamps
    end
  end
end
