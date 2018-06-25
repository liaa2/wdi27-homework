require 'pry'



# Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.
print "Bonus: match both wilma and fred: \n"
ARGF.each do |line|
  puts line if line =~ /wilma/ && line =~ /fred/
end
