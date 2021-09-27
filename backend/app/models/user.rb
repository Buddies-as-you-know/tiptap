class User < ApplicationRecord
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :themes
  has_many :user_taps
  validates :email, uniqueness: true
end
