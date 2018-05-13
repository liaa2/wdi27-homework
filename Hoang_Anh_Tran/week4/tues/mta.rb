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
# plan_trip( :n, 'Times Square', :l, 'Grand Central' )
# # Or something along those lines
# Hints:
# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
# A symbol can't just be a number!

# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.

# Make subway lines keys in a hash, while the values are an array of all the stops on each line.

# The key to the lab is to find the intersection of the lines at Union Square.

# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

@railwayslines = {
  :n => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  :l => ['8th', '6th', 'Union Square', '3rd', '1st'],
  :six => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

# slice method to get the traveled stations

@common_station = 'Union Square'
# travelled = []

# create a method to get the station travelling before transfer
def train_travel(first_stop, last_stop, line)
  line_stop = @railwayslines[line]

  stop_a = line_stop.index(first_stop)
  stop_b = line_stop.index(last_stop)
  if stop_a < stop_b
    travelled = line_stop[stop_a..stop_b]
  else
    travelled = line_stop[stop_b..stop_a]
    travelled = travelled.reverse
    # return travelled
  end
  travelled
end

p train_travel('Times Square', '23rd', :n)

train_travel('Times Square', '23rd', :n)
def plan_trip(first_line, first_stop, last_line, last_stop)
  if first_line == last_line
    puts 'single line trip'
    journey = train_travel(first_stop, last_stop, first_line)
    puts "You need to travel through the following stops #{journey.join(', ')}"
    puts "Total stops: #{journey.length}"
  else
    journey = train_travel(first_stop, @common_station, first_line) # travel to union square
    second_journey = train_travel(@common_station, last_stop, last_line)
    puts "The number of stations you need to travel are #{journey.length + second_journey.length}"
    journey.pop # remove 'Union Square'
    second_journey.shift # remove 'Union Square'
    puts "You need to follow #{journey.join(', ')}"
    puts "Change at #{@common_station}"
    puts "You need to follow #{second_journey.join(', ')}"
  end
end

plan_trip(:six, 'Grand Central', :six, 'Astor Place')
plan_trip(:six, 'Astor Place', :six, 'Grand Central')

puts 'Multi-line trip---------'

plan_trip(:six, 'Grand Central', :n, '8th')
