# MTA Lab
# Activity:
# Students should create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints:
#
# the stations the user must pass through, in order
# where to change lines, if necessary
# the total number of stops for the trip.
# There are 3 subway lines:
#
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# We should be able to say:
#
# plan_trip( :n, "Times Square", :l, "Grand Central" )
# # Or something along those lines
# Hints:
# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
# A symbol can't just be a number!
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

@trains = {
  "N" => ["34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}



require 'pry';


def single_trip(line1,start,finish)

  origin = @trains[line1].find_index(start)
  destination = @trains[line1].find_index(finish)

  if origin<destination
    trip = @trains[line1][origin+1..destination]
    # puts trip
  else
    trip = @trains[line1][destination...origin]
    trip.reverse!
    # puts trip
  end
  # require 'pry'; binding.pry
  trip
end



def plan_trip
  puts "Please enter your first line."
  line1 = gets.chomp.to_s.upcase


  puts "Please enter your start stop."
  start = gets.chomp.to_s

  puts "Please enter your second line."
  line2 = gets.chomp.to_s.upcase


  puts "Please enter your end stop."
  finish = gets.chomp.to_s

  # require 'pry'; binding.pry
  if line1==line2
    trip = single_trip(line1,start,finish)
    puts "You must travel through the following stops on the #{line1} line: #{trip}."
  else
    # single_trip(line1,start,"Union Square")
    trip = single_trip(line1,start,"Union Square")
    puts "You must travel through the following stops on the #{line1} line: #{trip}."
    puts "Change at Union Square."
    # single_trip(line2,"Union Square",finish)
    trip = single_trip(line2,"Union Square",finish)
    puts "Your journey continues through the following stops: #{trip}."
  end
end

plan_trip






#
# #========Version 1============
# def plan_trip
#   puts "Please enter your first line."
#   line1 = gets.chomp.to_s.upcase
#
#
#   puts "Please enter your start stop."
#   start = gets.chomp.to_s
#
#   puts "Please enter your second line."
#   line2 = gets.chomp.to_s.upcase
#
#
#   puts "Please enter your end stop."
#   finish = gets.chomp.to_s
#
#
#   # require 'pry'; binding.pry
#   if line1==line2
#     origin = @trains[line1].find_index(start)
#     destination = @trains[line1].find_index(finish)
#
#     if origin<destination
#     trip = @trains[line1][origin..destination]
#     else
#     trip = @trains[line1][destination..origin]
#     trip.reverse!
#     end
#     puts "You must travel through the following stops on the #{line1} line: #{trip}."
#   else
#     start = @trains[line1].find_index(start)
#     # p start
#     finish = @trains[line2].find_index(finish)
#     # p finish
#     transit_line1 = @trains[line1].find_index("Union Square")
#     # p transit_line1
#     transit_line2 = @trains[line2].find_index("Union Square")
#     # p transit_line2
#     if start<transit_line1
#       trip = @trains[line1][start..transit_line1]
#     else
#       trip = @trains[line1][transit_line1..start]
#       trip.reverse!
#     end
#     puts "You must travel through the following stops on the #{line1} line: #{trip}."
#     puts "Change at Union Square."
#
#     if transit_line2<finish
#       trip = @trains[line2][transit_line2+1..finish]
#     else
#       trip = @trains[line2][finish..transit_line2]
#       trip.reverse!
#     end
#     puts "Your journey continues through the following stops: #{trip}."
#   end
# end
#
# plan_trip
