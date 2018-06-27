require 'pry'

# Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.
print "Bonus: match both wilma and fred: \n"
ARGF.each do |line|
  puts line if line =~ /wilma/ && line =~ /fred/
  # puts line if line =~ /(fred.*wilma|wilma.*fred)/i # * means zero or more
  # puts line if line.include?('wilma') && line.include?('fred')
end
