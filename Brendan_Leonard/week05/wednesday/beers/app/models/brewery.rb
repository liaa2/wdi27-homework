class Brewery < ApplicationRecord
  validates :name, presence: true
  validates :country, presence: true
  validates :region, presence: true
  validates :founded, presence: true
  validates :logo_image, presence: true

  has_many :beers
end
