# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

def mortgage_calculator
  puts "Please enter your loan amount: "
  amount = gets.to_i

  puts "Please select loan term (in years)."
  year = gets.to_i

  puts "Please select Repayment type: Principal & interest(type PI) or Interest Only (type IO)."
  type = gets.chomp.to_s
  puts type

  puts "please select annual interest rate (%)."
  rate = gets.to_f

  case type
  when "IO"
    repayment = (amount*(rate/100))/12
    puts "Your monthly repayment is $#{repayment}."
  when "PI"
    rate = (rate/100)/12
    month = year*12
    repayment = amount*(rate*((1+rate)**month))/((1+rate)**month-1)
    puts "Your monthly repayment is $#{repayment}."
  else
    puts "Invalid inputs."
  end
end


mortgage_calculator
