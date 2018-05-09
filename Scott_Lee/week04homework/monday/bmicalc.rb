require 'pry'

puts "BMI calculator!"
puts "Please provide your height in metres: "
user_height = gets.to_f
puts "Please provide your weight in kilograms: "
user_weight = gets.to_f
puts "Your BMI is #{user_weight/(user_height**2)}"