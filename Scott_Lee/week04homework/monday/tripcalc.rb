require 'pry'

puts "Welcome to trip calculator!"
puts "How far away is your destination (in kilometres)?: "
distance = gets.to_f
puts "How many kilometres can your vehicle travel per litre of petrol?: "
fuel_eff = gets.to_f
puts "What is the price of petrol (in dollars) per litre?: "
petrol_price = gets.to_f
puts "What is the average speed (in kilometres per hour) that you will be travelling at?: "
speed = gets.to_f
puts "It will take #{(distance/speed).round(2)}hours to reach your destination."
puts "Your vehicle will require #{(distance/fuel_eff).round(2)}litres of petrol, which will cost $#{(petrol_price*distance/fuel_eff).round(2)}"