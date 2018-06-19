class Flight < ApplicationRecord
  belongs_to :airplane
  has_many :reservations

  # has_many :users, through: :reservations
  # we want to say: f.passengers (isntead of f.users)
  has_many :passengers, through: :reservations

  # make a virtual fake field, f.departure_date_formatted, a dynamic field
  # self is whatever object this method finds itself on
  def departure_date_formatted
    # self.departure_date.strftime "%Y-%m-%d, %I:%M%P"
    departure_date.strftime "%Y-%m-%d, %I:%M%P"

  end
end
