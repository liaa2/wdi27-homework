@all_lines = {
  "line1" => ["Emu Plains", "Penrith", "Kingswood", "Werrington", "St Marys", "Mount Druitt", "Rooty Hill", "Doonside", "Blacktown", "Seven Hills", "Toongabbie", "Pendle Hill", "Wentworthville", "Westmead", "Parramatta", "Harris Park", "Clyde", "Auburn", "Lidcombe", "Strathfield", "Burwood", "Redfern", "Central", "Town Hall", "Wynyard", "Milsons Point", "North Sydney", "Waverton", "Wollstonecraft", "St Leonards", "Artarmon", "Chatswood", "Roseville", "Lindfield", "Killara", "Gordon", "Pymble", "Turramurra", "Warrawee", "Wahroonga", "Waitara", "Hornsby", "Asquith", "Mount Colah", "Mount Kuring-gai", "Berowra"],
  "line1a" => ["Epping", "Eastwood", "Denistone", "West Ryde", "Meadowbank", "Rhodes", "Concord West", "North Strathfield", "Strathfield"],
  "line1b" => ["Hornsby", "Normanhurst", "Thornleigh", "Pennant Hills", "Beecroft", "Cheltenham", "Epping", "Macquarie University", "Macquarie Park", "North Ryde", "Chatswood"],
  "line2" => ["Leppington", "Edmondson Park", "Glenfield", "Casula", "Liverpool", "Warwick Farm", "Cabramatta", "Canley Vale", "Fairfield", "Yennora", "Guildford", "Merrylands", "Granvile", "Clyde", "Auburn", "Lidcombe", "Flemington", "Homebush", "Strathfield", "Burwood", "Croydon", "Ashfield", "Summer Hill", "Lewisham", "Petersham", "Stanmore", "Newtown", "MacdonaldTown", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"],
  "line3" => ["Liverpool", "Warwick Farm", "Cabramatta", "Carramar", "Villawood", "Leightonfield", "Chester Hill", "Sefton", "Birrong", "Yagoona", "Bankstown", "Punchbowl", "Wiley Park", "Lakemba", "Belmore", "Campsie", "Caterbury", "Hurlstone Park", "Dulwich Hill", "Marrickville", "Sydenham", "St Peters", "Erskineville", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"],
  "line4" => ["Helensburgh", "Waterfall", "Heathcote", "Engadine", "Loftus", "Sutherland", "Jannali", "Como", "Oatley", "Mortdale", "Penshurst", "Hurstville", "Allawah", "Carlton", "Kogarah", "Rockdale", "Banksia", "Arncliffe", "Wolli Creek", "Tempe", "Sydenham", "Redfern", "Central", "Town Hall", "Martin Place", "Kings Cross", "Edgecliff", "Bondi Junction"],
  "line5" => ["Richmond", "East Richmond", "Clarendon", "Windsor", "Mulgrave", "Vineyard", "Riverstone", "Schofields", "Quakers Hill", "Marayong", "Blacktown", "Seven Hills", "Toongabbie", "Pendle Hill", "Wentworthville", "Westmead", "Parramatta", "Harris Park", "Merrylands", "Guildford", "Yennora", "Fairfield", "Canley Vale", "Cabramatta", "Warwick Farm", "Liverpool", "Casula", "Glenfield", "Edmondson Park", "Leppington"],
  "line6" => ["Carlingford", "Telopea", "Dundas", "Rydalmere", "Camellia", "Rosehill", "Clyde"],
  "line7" => ["Olympic Park", "Lidcombe"],
  "line8" => ["Macarthur", "Campbelltown", "Leaumeah", "Minto", "Ingleburn", "Macquarie Fields", "Glenfield", "Holsworthy", "East Hills", "Panania", "Revesby", "Padstow", "Riverwood", "Narwee", "Beverly Hills", "Kingsgrove", "Bexely North", "Bardwell Park", "Turrella", "Sydenham", "St Peters", "Erskineville", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"]
}
@line_names = ["line1", "line2", "line3", "line4", "line5", "line6", "line7", "line8", "line1a", "line1b"];
@line_transfers = {
  "line1" => ["Blacktown", "Seven Hills", "Toongabbie", "Pendle Hill", "Wentworthville", "Westmead", "Parramatta", "Harris Park", "Clyde", "Lidcombe", "Strathfield", "Burwood", "Redfern", "Central", "Town Hall", "Wynyard", "Chatswood","Hornsby"],
  "line1a" => ["Epping", "Strathfield"],
  "line1b" => ["Hornsby", "Epping", "Chatswood"],
  "line2" => ["Leppington", "Edmondson Park", "Glenfield", "Casula", "Liverpool", "Warwick Farm", "Cabramatta", "Canley Vale", "Fairfield", "Yennora", "Guildford", "Merrylands", "Clyde", "Lidcombe", "Strathfield", "Burwood", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"],
  "line3" => ["Liverpool", "Cabramatta", "Sydenham", "St Peters", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"],
  "line4" => ["Sydenham", "Redfern", "Central", "Town Hall"],
  "line5" => ["Blacktown", "Seven Hills", "Toongabbie", "Pendle Hill", "Wentworthville", "Westmead", "Parramatta", "Harris Park", "Merrylands", "Guildford", "Yennora", "Fairfield", "Canley Vale", "Cabramatta", "Warwick Farm", "Liverpool", "Casula", "Glenfield", "Edmondson Park", "Leppington"],
  "line6" => ["Clyde"],
  "line7" => ["Lidcombe"],
  "line8" => ["Glenfield" , "Sydenham", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"]
}
@total_stops = 0
@final_stop = ""
@final_line = ""
@stops_to_stop_at = ""
@testing = false
@short_length = 0
@short_length2 = 0
@transfer_station = ""
@transfer_station_multi = ["", ""]
@middle_line = ""
@middle_line_end = ""


def plan_trip (line_from, stop_from, line_to, stop_to)
  @total_stops = 0
  @stops_to_stop_at = ""
  @final_stop = stop_to
  @final_line = line_to
  if line_from == line_to
    single_line(line_from, stop_from, stop_to)
  else
    @testing = true;
    shortest_line(line_from, stop_from, line_to, stop_to)
    shortest_line2(line_from, stop_from, line_to, stop_to)
    @testing = false
    if @short_length <= @short_length2
      single_line(line_from, stop_from, @transfer_station)
      if @final_stop != @transfer_station
        puts "Change at #{@transfer_station} to line #{line_to[-1]}."
      end
      single_line(line_to, @transfer_station, stop_to)
    else
      single_line(line_from, stop_from, @transfer_station_multi[0])
      puts "Change at #{@transfer_station_multi[0]} to line #{@middle_line_end[-1]}."
      single_line(@middle_line_end, @transfer_station_multi[0], @transfer_station_multi[1])
      if @final_stop != @transfer_station_multi[1]
        puts "Change at #{@transfer_station_multi[1]} to line #{line_to[-1]}."
      end
      single_line(line_to, @transfer_station_multi[1], stop_to);
    end
  end
end

def shortest_line(line_from, stop_from, line_to, stop_to)
  @short_length = 999
  @all_lines[line_from].each_with_index do |var, i|
    @all_lines[line_to].each_with_index do |var, j|
      if @all_lines[line_from][i] == @all_lines[line_to][j]
        single_line(line_from, stop_from, @all_lines[line_from][i])
        single_line(line_to, @all_lines[line_to][j], stop_to)
        if @total_stops < @short_length
          @short_length = @total_stops
          @transfer_station = @all_lines[line_from][i]
        end
        @total_stops = 0
      end
    end
  end
end

def shortest_line2(line_from, stop_from, line_to, stop_to)
  @short_length2 = 999;
  counter = 0;
  @line_transfers[line_from].each_with_index do |var, i|
    @line_names.each_with_index do |var, j|
      @middle_line = @line_names[j]
      @line_transfers[@middle_line].each_with_index do |var, k|
        @line_transfers[@middle_line].each_with_index do |var, l|
          @line_transfers[line_to].each_with_index do |var, m|
            counter += 1
            if @line_transfers[line_from][i] == @line_transfers[@middle_line][k] && @line_transfers[@middle_line][l] == @line_transfers[line_to][m]
              single_line(line_from, stop_from, @line_transfers[line_from][i])
              single_line(@middle_line, @line_transfers[@middle_line][k],@line_transfers[@middle_line][l])
              single_line(line_to, @line_transfers[@middle_line][l], stop_to)
              if @total_stops < @short_length2
                @short_length2 = @total_stops
                @transfer_station_multi[0] = @line_transfers[line_from][i]
                @transfer_station_multi[1] = @line_transfers[@middle_line][l]
                @middle_line_end = @middle_line
              end
              @total_stops = 0
            end
          end
        end
      end
    end
  end
end

def single_line(line_name, stop_from, stop_to)
  reversed = false
  line = @all_lines[line_name]
  @stops_to_stop_at = ""
  if line.index(stop_from) > line.index(stop_to)
    @all_lines[line_name].reverse!
    reversed = true
  end
  start_station = line.index(stop_from)+1
  end_station = line.index(stop_to)
  while start_station <= end_station
    @stops_to_stop_at += line[start_station]+", "
    start_station += 1
    @total_stops += 1
  end
  if !@testing && @stops_to_stop_at != ""
      puts "Stops on line #{line_name[-1]}: #{@stops_to_stop_at[0..-3]}."
  end
  if @final_stop == line[start_station-1] && !@testing && @final_line == line_name
    finish
  end
  if reversed
    @all_lines[line_name].reverse!
    reversed = false
  end
end
def finish
  puts "Total stops: #{@total_stops}"
end


#Random Trip
line_from = @line_names[rand(@line_names.length-3)]
station_from = @all_lines[line_from][rand(@all_lines[line_from].length-1)]
line_to = @line_names[rand(@line_names.length-3)]
station_to = @all_lines[line_to][rand(@all_lines[line_to].length-1)]
puts "--------------------------------------"
puts "From: Line #{line_from[-1]}, Station: #{station_from}"
puts "To:   Line #{line_to[-1]}, Station: #{station_to}"
puts "--------------------------------------"
plan_trip(line_from, station_from, line_to, station_to)
