require 'pry'

def strip_units ( input_val, unit_code )
  input = input_val.gsub(/#{ unit_code }|#{ unit_code.downcase }/,'')
  return input
end

puts "Enter the distance in km: "
distance_input = gets.chomp
distance = distance_input.to_f

puts "Enter the km per litre of your car: "
km_per_litre_input = gets.chomp
km_per_litre = km_per_litre_input.to_f

puts "Price per litre: "
price_per_litre_input = gets.chomp
price_per_litre = price_per_litre_input.to_f

puts "Trip Average Speed in km/h: "
speed_input = gets.chomp
speed = speed_input.to_f

puts
puts "Trip time: #{ ( distance / speed ).round(2) } hours"
puts "Trip cost: $#{ (( distance / km_per_litre ) * price_per_litre ).round(2) }"
puts
