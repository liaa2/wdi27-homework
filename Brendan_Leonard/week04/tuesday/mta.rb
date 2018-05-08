require 'pry'

@stations = {
  lineN: [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
  lineL: [ "8th", "6th", "Union Square", "3rd", "1st" ],
  line6: [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ]
}
@interchange_station = "Union Square"

# Returns an array for station movements on a single line
def single_line_trip( line, start_station, end_station )
  stations = @stations[ line ]
  if stations.index( start_station ) > stations.index( end_station )
    stations.reverse!
  end
  stations[stations.index( start_station )..stations.index( end_station )]
end

def plan_trip( start_line, start_station, end_line, end_station )
  # If the journey involves a line change:
  #   Then add 2 individual arrays to the trip array - first array added is
  #     from the start station to the interchange and the second array added
  #     is from the interchange to the end station
  # If the journey is all on a single line:
  #    Then the trip array will contain a single individual array from start to end station  
  if start_line != end_line
    trip = [ single_line_trip( start_line, start_station, @interchange_station ) ]
    trip += [ single_line_trip( end_line, @interchange_station, end_station ) ]
  else
    trip = [ single_line_trip( start_line, start_station, end_station ) ]
  end

  # due to naming restrictions we prefix 'line' to the hash key and need to strip it for display
  start_line_str = start_line.to_s.gsub('line','')
  print "You must travel through the following stops on the #{ start_line_str } line: "
  trip.each_with_index do |trip_part, index|
    if index == 1
      end_line_str = end_line.to_s.gsub('line','')
      puts "Change at #{ @interchange_station } for the #{ end_line_str } line."
      print "Your journey continues through the following stops on the #{ end_line_str } line: "
      # If we have a line change we want to exclude the start station and
      # the interchange station on the second line from the station count
      @num_stops = trip.flatten.length - 2
    else
      # If we have no line change we exclude the start station from the station count
      @num_stops = trip.flatten.length - 1
    end
    puts trip_part.drop(1).join(", ")
  end
  puts @num_stops == 1 ? "#{ @num_stops } stop in total." : "#{ @num_stops } stops in total."
  puts
end

puts "plan_trip( :lineN, 'Times Square', :lineL, '8th' )"
plan_trip( :lineN, "Times Square", :lineL, "8th" )

puts "plan_trip( :lineN, '8th', :lineN, '34th' )"
plan_trip( :lineN, "8th", :lineN, "34th" )

puts "plan_trip( :lineN, '34th', :lineN, '8th' )"
plan_trip( :lineN, "34th", :lineN, "8th" )