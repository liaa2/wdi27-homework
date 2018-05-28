# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating boxcat tables ... "

Boxcat.destroy_all

Boxcat.create name:"Leo", image:"https://whyevolutionistrue.files.wordpress.com/2013/03/cat-in-box.jpeg", box_volume: 20, cat_size: 40, cat_origin: "Zoo"
Boxcat.create name:"Supercat", box_volume: 40, cat_size: 10, cat_origin: "Mars"
