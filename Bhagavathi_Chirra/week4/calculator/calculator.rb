
require 'pry'
#binding.pry

# operation_to = 1;

loop do
  puts "Choose the operation you want to perform: [ +, -, *, /, %, exp, sqrt, BMI, mort, quit ]"
  operation_to = gets.chomp.to_s
  break if operation_to == "quit"

  if operation_to == "sqrt"
    puts "Enter the number:"
    first_num = gets.to_i
  elsif operation_to == "BMI"
    puts "Enter weight in kilograms:"
    weight = gets.to_f
    puts "Enter height in meters:"
    height = gets.to_f
  # elsif operation_to == "mort"
  #   puts "Enter principal amount:"
  #   principal = gets.to_f
  #   puts "Enter rate of interest:"
  #   interest_rate = gets.to_f
  #   puts "Enter number of payments:"
  #   num_of_payments = gets.to_i
  else
    puts "Enter the first number:"
    first_num = gets.to_i
    puts "Enter the second number:"
    second_num = gets.to_i
  end
  result = case operation_to
    when "+" then puts "result is :#{first_num + second_num}"
    when "-" then puts "result is :#{first_num - second_num}"
    when "*" then puts "result is :#{first_num * second_num}"
    when "/" then puts "result is :#{first_num / second_num}"
    when "%" then puts "result is :#{first_num % second_num}"
    when "exp" then puts "result is :#{first_num**second_num}"
    when "sqrt" then puts "result is:#{Math.sqrt(first_num)}"
    when "BMI" then puts "result is:#{weight / height**2}"
    # when "mort" then puts "result is:#{principal * interest_rate ( 1 + interest_rate)**num_of_payments / (1 + interest_rate)**num_of_payments -1 }"
    else
      puts "Invalid"
  end
end

# x**y  exponent
# sq rt Math.sqrt(x),



# exit




# require 'pry'
# #binding.pry
# puts "Choose the operation you want to perform:"
# p "+"
# p "-"
# p "*"
# p "/"
# p "%"
# p "quit"
#
# operation_to = gets.chomp.to_s
#
# puts "Enter the first number:"
# first_num = gets.to_i
# puts "Enter the second number:"
# second_num = gets.to_i
# #p operation_to
# result = case operation_to
#   when "+" then puts "result is :#{first_num + second_num}"
#   when "-" then puts "result is :#{first_num - second_num}"
#   when "*" then puts "result is :#{first_num * second_num}"
#   when "/" then puts "result is :#{first_num / second_num}"
#   when "%" then puts "result is :#{first_num % second_num}"
#   else "quit"
#     exit
# end
# puts result
