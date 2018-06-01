class Beer < ApplicationRecord
  validates :brewery_id, presence: true
  validates :name, presence: true
  validates :style, presence: true
  validates :description, presence: true
  validates :size, presence: true
  validates :abv, presence: true
  validates :std_drinks, presence: true
  validates :image, presence: true

  belongs_to :brewery
end
