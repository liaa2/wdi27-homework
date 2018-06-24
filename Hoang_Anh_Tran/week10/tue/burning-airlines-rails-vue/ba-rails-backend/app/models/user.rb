class User < ApplicationRecord
  has_secure_password # need gem bycrypt
  has_many :reservations
  has_many :flights, through: :reservations
end
