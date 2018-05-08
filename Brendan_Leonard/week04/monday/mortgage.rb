require 'pry'

puts "How much have you borrowed $? "
amount_input = gets.chomp

# Convert from $ to a number
amount = amount_input.gsub(/[^\d\.-]/,'').to_f

puts "How many years is the mortgage for? "
years_input = gets.chomp
months = ( years_input.to_f * 12 ).floor

puts "What is the interest rate?: "
rate_input = gets.chomp
rate = rate_input.gsub(/\%/,'').to_f

i = ( rate / 100 ) / 12
i2 = ( 1 + i )**months

repayment = ( amount * ( i * i2 ) / ( i2 - 1 )).round(2)

puts
puts "For a #{ amount_input } loan over #{ years_input } years at a rate of #{ rate_input } :"
puts "Monthly repayments will be: $#{ repayment }"
puts
