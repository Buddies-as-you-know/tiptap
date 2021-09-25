class User < ApplicationRecord
  has_many :themes
  has_many :user_taps
  validates :email, uniqueness: true
end
