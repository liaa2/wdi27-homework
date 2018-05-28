# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Populating the employees..."

Employee.destroy_all

Employee.create number: "AB001", first_name: "Bagi", last_name: "Chirra", job_title: "Receptionist", date_of_birth: "1984-05-10 12:00:00", image:"https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&h=350", salary: "3000"

Employee.create number: "AB002", first_name: "Joe", last_name: "Byrne", job_title: "Manager", date_of_birth: "1945-05-10 12:00:00", image:"https://images.pexels.com/photos/87840/daisy-pollen-flower-nature-87840.jpeg?cs=srgb&dl=plant-flower-macro-87840.jpg&fm=jpg", salary: "8000"

puts "created #{Employee.all.length}:"
