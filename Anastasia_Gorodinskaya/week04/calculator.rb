require 'pry'
require 'colorize'

def add(a, b)
  puts "ADDING #{a + b}"
  a + b
end

def sub(a, b)
  puts "SUBTRACTING #{a - b}"
  a - b
end

def mul(a, b)
  puts "MULTIPLYING #{a * b}"
  a * b
end

def div(a, b)
  puts "DIVIDING #{a / b}"
  a / b
end

def exp(a, b)
  puts "EXPONENT"
  a ** b
end

def quit( ignore, also_ignore)
  # return 'exit'
  puts "Goodbye!"
  exit
end

loop do

  puts """Please chose the the operation you would like to perform:
  add to ADD
  sub to SUBTRACT
  mul for MULTIPLY
  div for DIVIDE
  exp for EXPONENT
  quit for QUIT
  """.blue
  oper_user = gets.chomp

  break if oper_user == 'quit'

  puts "Please enter the first number".red
  a = gets.to_i
  puts "Please enter the second number".red
  b = gets.to_i

  result = send(oper_user, a, b)
  puts result

end
