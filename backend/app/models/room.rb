class Room < ApplicationRecord
  belongs_to :theme
  has_many :user_taps
  validates :name, presence: true
end
