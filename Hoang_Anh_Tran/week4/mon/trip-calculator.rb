
# Trip Calculator
# Calculate a trip time and cost given inputs for
#
# distance - distance
# kilometers per litre - kmpl
# price per litre - ppl
# speed in kilometers per hour - speed
require "pry"

puts "distance travel:"
distance = gets.to_f
puts "kilometers per litre"
kmpl = gets.to_f
puts "price per litre"
ppl = gets.to_f
puts "speed in kilometers per hour"
speed = gets.to_f

def trip_calculator(distance, kmpl, ppl, speed)
  trip_time = distance / speed
  cost = (distance / kmpl) * ppl
  [trip_time, cost]
end

result = trip_calculator(distance, kmpl, ppl, speed)
# binding.pry # do pry before the error that you get

p "Your trip time will be #{result[0].round(1)} hours"
p "Your cost will be $#{result[1].round(2)}"
