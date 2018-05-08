require 'pry'

@lines = {
    :lineN => [
        "Times Square",
        "34th",
        "28th",
        "23rd",
        "Union Square",
        "8th"
    ],
    :lineL => [
        "8th",
        "6th",
        "Union Square",
        "3rd",
        "1st"
    ],
    :lineSix => [
        "Grand Central",
        "33rd",
        "28th",
        "23rd",
        "Union Square",
        "Astor Place"
    ]
}


puts "What is your origin station? "
origin = gets.chomp
puts "What is your destination station? "
destination = gets.chomp


# returns array of all lines through a station
def lines_through_station(station)
    array_of_lines = [];
    @lines.select do |x|
        if @lines[x].include?(station)
            array_of_lines.push(x)
        end
    end
end

# lines going through origin's station and destination's station
origin_lines = lines_through_station(origin).keys
destination_lines = lines_through_station(destination).keys

# returns array of lines in common between 2 stations
def common_line_finder(x, y)
    common_line_array = lines_through_station(x).keys & lines_through_station(y).keys
    common_line_array
end

# array of lines in common
@common = common_line_finder(origin, destination)

# array of all junctions
all_junctions = []
@lines.values.each do |x|
    x.each do |y|
        if lines_through_station(y).keys.length > 1
            all_junctions.push(y)
        end
    end
end
$junctions = all_junctions.uniq!

# returns array of junctions in common
def common_junction_finder(x,y)
    common_junctions = []
    $junctions.each do |junc|
        if common_line_finder(x,junc).length != 0 && common_line_finder(y,junc).length != 0
            common_junctions.push(junc)
        end
    end
    common_junctions
end


# finds displacement on the same line
def displacement(x,y)
    @lines[@common[0]].find_index(y) - @lines[@common[0]].find_index(x)
end


# returns hash of junctions in common between origin and destination, and the sums of the distances between junctions to these stations
def junction_connection_distances(x,y)
    junction_connections = {}
    common_juncs = common_junction_finder(x,y)
    common_juncs.each do |junc|
        junction_connections[junc] = displacement(junc,x).abs + displacement(junc,y).abs
    end
    junction_connections
end
puts "sums of distances to juncs between 1st and GC are..."
p junction_connection_distances("1st","Grand Central")



# sort, and take shortest path






# final method
if @common.length != 0
    if displacement(origin,destination) > 0
        # travel towards -1th index of line
        p "Stay on current line"
        p "Travel in the direction of #{@lines[@common[0]].last}"
        p "You will arrive at #{destination} after #{displacement(origin,destination)} stop(s)."
    else
        p "Stay on current line"
        p "Travel in the direction of #{@lines[@common[0]].first}"
        p "You will arrive at #{destination} after #{displacement(origin,destination)*-1} stop(s)."
    end
else
    # travel from origin to union square (origin, union squ)
    p "Travel to Union Square to transfer."
    p "You will arrive at Union Square after #{displacement(origin,"Union Square").abs} stop(s)."
    # travel from union square to destination (union squ, destination)
    p "Transfer to line #{destination_lines[0]}."
    p "Travel towards #{destination}. You will arrive after #{displacement("Union Square",destination).abs} stop(s)."
end