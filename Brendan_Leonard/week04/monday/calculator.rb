require 'pry'

quit_calculator = false

until quit_calculator
  puts "Enter number 1: "
  number_1 = gets.chomp.to_f

  valid_operator = false
  until valid_operator
    puts "Choose your operator [ + OR - OR * OR / OR ** ]: "
    operator = gets.chomp

    if operator != "+" &&
       operator != "-" &&
       operator != "*" &&
       operator != "/" &&
       operator != "**"
      puts "Invalid operator. Please choose again"
    else
      valid_operator = true
    end
  end
  
  puts "Enter number 2: "
  number_2 = gets.chomp.to_f

  case operator
  when "+"
    result = number_1 + number_2
  when "-"
    result = number_1 - number_2
  when "*"
    result = number_1 * number_2
  when "/"
    result = number_1 / number_2
  when "**"
    result = number_1 ** number_2
  end

  puts "The result of the calculation is: "
  puts "#{ number_1 } #{ operator } #{ number_2 } = #{ result }"

  while true
    puts "Perform another calculation (y/n)?"
    another = gets.chomp.downcase

    if another == "n"
      quit_calculator = true
      break
    elsif another == "y"
      quit_calculator = false
      break
    else
      puts "Response must be y OR n ... try again please"
    end
  end
end
