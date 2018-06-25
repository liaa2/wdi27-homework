require 'pry'

# Make a program that prints each line that has a word that is capitalized but not ALL capitalized. Does it match Fred but neither fred nor FRED?

print "Exercise 4: Matches words with Uppercase and Lowercase: \n"
ARGF.each do |line|
  puts line if line =~ /[a-z]/ && line =~ /[A-Z]/
end
