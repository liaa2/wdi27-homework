@all_lines = {
  "lineN" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "lineL" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "line6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
@total_stops = 0
@final_stop = ""
def plan_trip (line_from, stop_from, line_to, stop_to)
  @total_stops = 0
  @final_stop = stop_to
  if line_from == line_to
    single_line(line_from, stop_from, stop_to)
  else
    single_line(line_from, stop_from, "Union Square")
    puts "Change at Union Square to #{line_to}"
    single_line(line_to, "Union Square", stop_to)
  end
end
def single_line(line_name, stop_from, stop_to)
  stops_to_stop_at = ""
  line = @all_lines[line_name]
  if line.index(stop_from) > line.index(stop_to)
    line.reverse!
  end
  start_station = line.index(stop_from)+1
  end_station = line.index(stop_to)
  while start_station <= end_station
    stops_to_stop_at += line[start_station]+", "
    start_station += 1
    @total_stops += 1
  end
  puts "You must travel through the following stops on #{line_name}: #{stops_to_stop_at[0..-3]}."
  if @final_stop == line[start_station-1]
    finish
  end
end
def finish
  puts "Total stops: #{@total_stops}"
end
puts "Line From:"
line_from = gets.chomp
puts "Stop From:"
stop_from = gets.chomp
puts "Line To:"
line_to = gets.chomp
puts "Stop To:"
stop_to = gets.chomp
plan_trip(line_from, stop_from, line_to, stop_to)
