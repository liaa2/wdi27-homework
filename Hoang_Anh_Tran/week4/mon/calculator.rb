#!/usr/bin/env ruby

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
# Calculator should be able to do basic arithmetic (exponents - to the power of, root number, square root, cube root etc., - to the power of fraction)


puts "choose the operators ( + | - | * | / | ** | 'root' ):"
operator = gets.chomp
abort("ENTER A VALID OPERATOR") if ! ["+", "-", "/", "*", "**", 'root'].include?(operator)

puts "enter 2 numbers"
num1 = gets.to_i
num2 = gets.to_i


def root_function(num1, num2)
  eval("#{num1} ** (1.0/#{num2})")
end

def calculator_advanced(num1, operator, num2)
  eval("#{num1} #{operator} #{num2}")
end

if operator == "root"
  p root_function(num1, num2)
else
  p calculator_advanced(num1, operator, num2)
end



# Bonus
# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# def add_number(num1, num2)
#   num1 + num2
# end
# def subtract_number(num1, num2)
#   num1 - num2
# end
#
# def multiply_number(num1, num2)
#   num1 * num2
# end
#
# def divide_number(num1, num2)
#   num1 / num2
# end
#
#
# if operator == "+"
#   p add_number(num1, num2)
# elsif operator == "-"
#   p subtract_number(num1, num2)
# elsif operator == "*"
#   p multiply_number(num1, num2)
# elsif operator == "/"
#   p divide_number(num1, num2)
# end
