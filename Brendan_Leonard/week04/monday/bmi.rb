require 'pry'

puts "Enter your weight in kg: "
weight_input = gets.chomp

# Strip KG if it exists
weight = weight_input.gsub(/[kg|KG]/,'').to_f

puts "How your height in metres: "
height_input = gets.chomp
# Strip m if it exists
height = height_input.gsub(/[m|M]/,'').to_f

bmi = ( weight / ( height * height )).round(1)

puts
puts "You weigh #{ weight }kg and are #{ height }m tall which gives you a BMI of #{ bmi }"

case 
when bmi < 18.5
  puts "You're classified as [UNDERWEIGHT]"
when (18.5..24.9) === bmi
  puts "You're classified as [NORMAL WEIGHT]"
when (25..29.9) === bmi
  puts "You're classified as [OVERWEIGHT]"
when bmi > 30 
  puts "You're classified as [OBESE]"
end
puts
