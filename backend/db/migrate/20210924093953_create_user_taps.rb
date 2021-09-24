class CreateUserTaps < ActiveRecord::Migration[6.1]
  def change
    create_table :user_taps do |t|
      t.references :user
      t.references :room
      t.integer :count

      t.timestamps
    end
  end
end
