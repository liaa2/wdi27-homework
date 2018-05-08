# Bonus
#
# Trip Calculator
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

def trip_calculator
  puts "Please enter distance in miles."
  miles = gets.to_f

  puts "Please enter miles per gallon."
  miles_per_gallon = gets.to_f

  puts "Please enter price per gallon."
  price = gets.to_f

  puts "please enter speed in miles per hour."
  speed = gets.to_f

  trip_time = miles/speed

  cost = (miles/miles_per_gallon)*price

  puts "Trip time is #{trip_time} hour, cost is $#{cost}."
end

trip_calculator
