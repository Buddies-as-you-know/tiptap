class AddColumnsToRooms < ActiveRecord::Migration[6.1]
  def change
    add_column :rooms, :enthusiastic_close_time, :integer
  end
end
