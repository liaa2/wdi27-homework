class Country < ApplicationRecord
  has_many :brands
  validates :name, presence: true, length: { minimum: 3}
end
