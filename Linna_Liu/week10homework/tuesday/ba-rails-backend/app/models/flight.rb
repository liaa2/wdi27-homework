class Flight < ApplicationRecord
  belongs_to :airplane
  has_many :reservations
  # has_many :users, through: :reservations
  # we want to say: f.passengers
  has_many :passengers, through: :reservations

  #f.departure_date_formatted
  def departure_date_formatted
    #self means f here
    self.departure_date.strftime "%Y-%m-%d, %I:%M%P"
  end



end
