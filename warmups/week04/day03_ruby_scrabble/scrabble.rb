require 'pry'

# Create letter values hash
scrabble_letters = {
  1 => %w{A E I O U L N R S T},
  2 => %w{D G},
  3 => %w{B C M P},
  4 => %w{F H V W Y},
  5 => %w{K},
  8 => %w{J X},
  10 => %w{Q Z}
}

score = 0

puts "Please enter your word"
word = gets.chomp

# word becomes array through .chars
# .chars is a helper method which gives us each individual letter of a string and turns it into an array
word.upcase.chars.each do |letter|

# puts "#{letter}"
  scrabble_letters.each do |key, value|

    if scrabble_letters[key].include?(letter)
      score += key
    end

    # Alternate 1 line solution
    # score += key if value.include?(letter)

  end
end

puts "The word you entered was #{word}, the score is #{score}"


# Brendan's alternate solution with each letter as a key
# def calc( word )
#   points = {
#     "A"=>1, "E"=>1, "I"=>1, "O"=>1, "U"=>1, "L"=>1, "N"=>1, "R"=>1, "S"=>1, "T"=>1,
#     "D"=>2, "G"=>2,
#     "B"=>3, "C"=>3, "M"=>3, "P"=>3,
#     "F"=>4, "H"=>4, "V"=>4, "W"=>4, "Y"=>4,
#     "K"=>5,
#     "J"=>8, "X"=>8,
#     "Q"=>10, "Z"=>10
#   }
#   word.upcase.split('').reduce(0) {|tot, curr| tot += points[curr]}
# end
#
# word = ARGV[0]
# puts "word [#{ word }] score [#{ calc( word ) }]"
