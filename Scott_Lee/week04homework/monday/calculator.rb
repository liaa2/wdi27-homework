require 'pry'
require 'colorize'

# second attempt

# prompt_operation = "Choose your operator ( + , - , * , / ). Type ~ to exit. "


proper_operations = ["+","-","*","/","**","sqrt","~"]
prompt_operation = 'Choose your operator (+, -, *, **, sqrt /). Type ~ to exit. '
prompt_operand = "Choose your operand."
prompt_operator = "Choose your operator."
operation = "&"


while !proper_operations.include?(operation)
    puts prompt_operation
    operation = gets.chomp
    if operation == "~"
        break
    elsif operation == "sqrt"
        puts prompt_operand
        operand = gets.to_f
        puts "The square root of #{operand} is #{Math.sqrt(operand)}"
        operation = "&"
    else
        puts prompt_operand
        operand = gets.to_f
        puts prompt_operator
        operator = gets.to_f
        case operation
        when "+"
            puts "The result is #{operand + operator}"
            operation = "&"
        when "-"
            puts "The result is #{operand - operator}"
            operation = "&"
        when "*"
            puts "The result is #{operand * operator}"
            operation = "&"
        when "/"
            puts "The result is #{operand / operator}"
            operation = "&"
        when "**"
            puts "The result is #{operand ** operator}"
            operation = "&"
        end
    end
end