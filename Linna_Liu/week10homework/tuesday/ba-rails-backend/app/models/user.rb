class User < ApplicationRecord
  has_secure_password #need gem 'bcrypt'

  has_many :reservations
  has_many :flights, through: :reservations

  def user_details
    p current_user
    p "u"*100
    self.name = current_user.name
  end
end
