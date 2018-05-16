# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cheese.destroy_all

Cheese.create name: "Herve Mons Ossau Iraty 10-12 mois", varietal: "Ossau Iraty", firmness: "Semi-Firm", region: "Basque Region, France", milk: "Sheeps", pasteurised: true, size: 250, unit_of_measure: "g", price: 22.00, image: "http://ocello.com.au/wp-content/uploads/2015/02/Ossau-Iraty-webstore-square.jpg"

Cheese.create name: "Herve Mons Brillat Savarin Triple Cream 500g", varietal: "Brillat Savarin", firmness: "Soft", region: "Burgundy, France", milk: "Cow", pasteurised: true, size: 500, unit_of_measure: "g", price: 36.00, image: "http://ocello.com.au/wp-content/uploads/2011/11/Brillat-Savarin-websquare-1024x1022.jpg"
