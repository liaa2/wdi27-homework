#!/usr/bin/env ruby
require 'pry'

# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight


# Use the chart to locate your height and weight. The shaded regions on the chart correspond to normal and overweight ranges based on body mass index (BMI). ... A BMI of 18.5 to 24.9 (green) is considered healthy. A BMI of 25 to 29.9 (yellow) is considered overweight. A BMI of 30 or higher (red) is considered obese.

puts "enter your height in meters"
height = gets.to_f
puts "enter your weight in kilograms"
weight = gets.to_f

# binding.pry

def bmi_calculator(height, weight)
  weight / height ** 2
end

result = bmi_calculator(height, weight)

case result
when 0..18.5 then p "you're too skinny, eat more cake"
when 18.5..24.9 then p "you're healthy, eat whatever"
when 25..29.9 then p "you are considered overweight, do not eat cakes"
when 30..100 then p "you're fat, drink more green juice, stop eating cake"
else p "Please put valid height and weight!!!"
end

p "your BMI is #{result}"
