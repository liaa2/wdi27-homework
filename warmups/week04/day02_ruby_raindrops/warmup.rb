# require 'pry'
# binding.pry

def raindrops(num)

  # create an empty string that will be apppended to
  str = ''

  # if statement to test if number if divisible by 3, and if so, print out 'Pling' (add Pling to the str)
  # short conditional 'if' statements can be condensed down to a single line.
  str += 'Pling' if num % 3 == 0
  # if num % 3 == 0
  #   str += 'Pling'
  # end

  str += 'Plang' if num % 5 == 0
  # if num % 5 == 0
  #   str += 'Plang'
  # end

  str += 'Plong' if num % 7 == 0
  # if num % 7 == 0
  #   str += 'Plong'
  # end

  # If str is empty, ie not a factor of 3,5,7 then return num (as string)
  str = num.to_s if str.empty?
  # if str.length == 0
  #   str = num.to_s
  # end

  # Ruby allows implicit return. Placing this value last in my program is the same as saying return str.
  str

end

puts raindrops 28
puts raindrops 34
puts raindrops 1755
