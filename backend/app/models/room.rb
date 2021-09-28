class Room < ApplicationRecord
  attr_accessor :user_room_total_taps
  belongs_to :theme
  has_many :user_taps
  validates :name, presence: true
end
