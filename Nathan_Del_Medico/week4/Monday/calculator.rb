# Calculator
# Explanation
# You will be building a calculator which can perform multiple arithmetic operations. Your program should allow the user to choose which operation to perform, enter the values on which the operation is performed, and output the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# The menu should be displayed again, and process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
def addition
  puts "Please enter the two numbers you want to add"
  number1 = gets.to_i
  number2 = gets.to_i
  p "#{number1} + #{number2} = #{number1+number2}"
end

def subtraction
  puts "Please enter the two numbers you want to subtract"
  number1 = gets.to_i
  number2 = gets.to_i
  p "#{number1} - #{number2} = #{number1-number2}"
end

def multiplication
  puts "Please enter the two numbers you want to multiply"
  number1 = gets.to_i
  number2 = gets.to_i
  p "#{number1} * #{number2} = #{number1*number2}"
end

def division
  puts "Please enter the two numbers you want to divide"
  number1 = gets.to_i
  number2 = gets.to_i
  p "#{number1} / #{number2} = #{number1/number2}"
end

def square_root
  puts "Please enter a number to find the square root of"
  number = gets.to_i
  p "The square root of #{number} is #{Math.sqrt(number)}"
end

def exponent
  puts "Please enter the two numbers you want to use"
  number1 = gets.to_i
  number2 = gets.to_i
  p "#{number1} to the power of #{number2} is #{number1**number2}"
end

def mortgage
  puts "Please enter how much you have left to pay"
  number = gets.to_f
  per_month = number/12
  p "For 5 years you will need to pay $#{per_month/5} per month"
  p "For 10 years you will need to pay $#{per_month/10} per month"
  p "For 20 years you will need to pay $#{per_month/20} per month"
end

def bmi
  puts "Please enter your weight in kg, then your height in metres"
  number1 = gets.to_f
  number2 = gets.to_f
  p "With a weight of #{number1}kg, and a height of #{number2}m. Your BMI is #{number1/(number2*number2)}"
end

puts "Welcome to the calculator!"
leave = false
while !leave
  puts "Choose an operation from the list below:"
  puts "Addition:            +"
  puts "Subtraction:         -"
  puts "Multiplication:      *"
  puts "Division:            /"
  puts "Square Root:         squareroot"
  puts "Exponent:            exponent"
  puts "Mortgage Calculator: mortgage"
  puts "Body Mass Index:     bmi"
  puts "To exit:             exit"
  choice = gets.chomp.downcase
  case choice
    when "+"          then addition
    when "-"          then subtraction
    when "*"          then multiplication
    when "/"          then division
    when "squareroot" then square_root
    when "exponent"   then exponent
    when "mortgage"   then mortgage
    when "bmi"        then bmi
    when "exit"       then leave = true
  end
end
puts "Thanks for using the calculator!"
