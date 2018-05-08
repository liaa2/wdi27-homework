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



#calculator
require 'pry'


def calculator
  loop do
    puts "Please choose your operation (enter the sign): addition, substraction, multiplication, division, exponents, square roots or exit "

    sign = gets.chomp.to_s

    break if sign=="exit"

    puts "Please enter your first number."

    a = gets.to_f

    puts "Please enter the second number."

    b = gets.to_f

    puts sign,a,b

    case sign
    when "addition"
      puts "Result is: #{a + b}"
    when "substraction"
      puts "Result is: #{a - b}"
    when "multiplication"
      puts "Result is: #{a * b}"
    when "division"
      puts "Result is: #{a / b}"
    when "exponents"
      puts "Result is: #{a ** b}"
    when "square roots"
      if a<0 || b<0
        puts "Numbers can't be negative."
      else
        puts "Results are: #{Math.sqrt(a)} & #{Math.sqrt(b)}."
      end
    end
  end
end

calculator
