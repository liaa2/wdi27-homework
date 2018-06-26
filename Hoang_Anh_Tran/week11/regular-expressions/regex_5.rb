require 'pry'


# Make a program that prints each line that has a two of the same nonwhitespace characters next to each other. It should match lines that contain words such as Mississippi, Bamm-Bamm, or llama.

print "Exercise 5: Matches lines with two consecutive characters: \n"
ARGF.each do |line|
  puts line if line =~ /([a-zA-Z0-9])\1/
  # \s white space characters \S none white space characters

  # puts line if line =~ /(\S)\1/ # \1 giv
end
