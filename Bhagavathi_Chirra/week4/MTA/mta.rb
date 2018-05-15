#
# require 'pry'
#
# @lines = {
#   n: ["Times Square", "34th", "28th", "23rd",  "Union Square", "8th"],
#   l: ["8th", "6th", "Union Square", "3rd", "1st"],
#   six: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
# }
#
# def plan_trip(starting_line, starting_station, ending_line, ending_station)
#   if starting_line == ending_line
#     single_trip(starting_line, starting_station, ending_station)
#   else
#     multiline_trip(starting_line, starting_station, ending_line, ending_station)
#   end
# end
#
# def single_trip(starting_line, starting_station, ending_station)
#   starting_st_index = @lines[starting_line].index(starting_station)
#   ending_st_index = @lines[starting_line].index(ending_station)
#   if starting_st_index < ending_st_index
#     puts "#{@lines[starting_line][starting_st_index+1..ending_st_index]}"
#   else
#       puts "#{@lines[starting_line][ending_st_index..starting_st_index-1].reverse}"
#   end
# end
# def multiline_trip(starting_line, starting_station, ending_line, ending_station)
#   interchange = "Union Square"
#   starting_st_index = @lines[starting_line].index(starting_station)
#   int_st_l1 = @lines[starting_line].index(interchange)
#   ending_st_index = @lines[ending_line].index(ending_station)
#   int_st_l2 = @lines[ending_line].index(interchange)
#   if starting_st_index < int_st_l1
#     puts "#{@lines[starting_line][starting_st_index+1..int_st_l1]}"
#   else
#       puts "#{@lines[starting_line][int_st_l1..starting_st_index-1].reverse}"
#   end
#   if ending_st_index < int_st_l2
#     puts "#{@lines[ending_line][ending_st_index..int_st_l2-1].reverse}"
#   else
#       puts "#{@lines[ending_line][int_st_l2+1..ending_st_index]}"
#   end
# end
#
# #plan_trip(:l,"6th",:l,"3rd")
# #plan_trip(:l,"3rd",:l,"6th")
# plan_trip(:n,"34th",:l,"8th")
# #plan_trip(:l,"3rd",:l,"6th")
#



require 'pry'

@lines = {
  'n' => ["Times Square", "34th", "28th", "23rd",  "Union Square", "8th"],
  l: ["8th", "6th", "Union Square", "3rd", "1st"],
  six: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

puts "Enter the starting line:"
@starting_line = gets.chomp.to_sym
#starting_line = @lines[@starting_line]
puts "Enter the starting station:"
@starting_station = gets.chomp
puts "Enter the ending line:"
@ending_line = gets.chomp
puts "Enter the ending station:"
@ending_station = gets.chomp

puts "#{@starting_line, @starting_station, @ending_line, @ending_station}"

def plan_trip
  #binding.pry
  if @starting_line == @ending_line
    single_trip
  else
    multiline_trip
  end
end

def single_trip
  starting_st_index = @lines[@starting_line].index(@starting_station)
  ending_st_index = @lines[@starting_line].index(@ending_station)
  if starting_st_index < ending_st_index
    puts "#{@lines[@starting_line][starting_st_index+1..ending_st_index]}"
  else
      puts "#{@lines[@starting_line][ending_st_index..starting_st_index-1].reverse}"
  end
end
def multiline_trip
  interchange = "Union Square"
  starting_st_index = @lines[@starting_line].index(@starting_station)
  int_st_l1 = @lines[@starting_line].index(interchange)
  ending_st_index = @lines[@ending_line].index(@ending_station)
  int_st_l2 = @lines[@ending_line].index(interchange)
  if starting_st_index < int_st_l1
    puts "#{@lines[@starting_line][starting_st_index+1..int_st_l1]}"
  else
      puts "#{@lines[@starting_line][int_st_l1..starting_st_index-1].reverse}"
  end
  if ending_st_index < int_st_l2
    puts "#{@lines[@ending_line][ending_st_index..int_st_l2-1].reverse}"
  else
      puts "#{@lines[@ending_line][int_st_l2+1..ending_st_index]}"
  end
end

plan_trip
