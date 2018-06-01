# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "There are evils in this world"

Serialkiller.destroy_all

Serialkiller.create first_name: "Ted", last_name: "Bundy", alive: false, victims: 36

Serialkiller.create first_name: "Myra", last_name: "Hindley", alive: false, victims: 5

Serialkiller.create first_name: "Jeffrey", last_name: "Dahmer", alive: false, victims: 17

Serialkiller.create first_name: "Jack", last_name: "Unterweger", alive: false, victims: 12

Serialkiller.create first_name: "Paul", last_name: "Bernardo", alive: true, victims: 3



puts "Created #{Serialkiller.all.length}:"
puts Serialkiller.all.pluck(:first_name).join(', ')
