require 'pry'


print "Exercise 2: All lines matching fred or Fred: \n"
# Modify the previous program to allow Fred to match as well. Does it match now if your input string is Fred, frederick, or Alfred? (Add lines with these names to the text file.)
ARGF.each do |line|
  puts line if line =~ /(fred|Fred)/
  # puts line if line =~ /[Ff]ed/

  # puts line if line =~ /fred/i
end
