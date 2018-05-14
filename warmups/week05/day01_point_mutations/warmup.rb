
# Compare one string against another string and track how many times the respective letters are different

# (1) Write a method which take two strings
# (2) Turn the strings into arrays to allow for comparison
# (3) Keep track of mismatches
# (4) at the end want to print out the number of mismatches (i.e. the hamming distance)

# take two strings as input
def point_mutations(string1, string2)

  # keep track of the differences between the two strings
  difference = 0

  # Loop through the 1st string, storing each of the indexes and letters into variables
  string1.chars.each_with_index do |letter, index|

    # if the current letter of string1 is not the same as the corresponding letter in string2, increment the difference variable by 1
    if letter != string2[index]
      difference += 1
    end

  end

  p "The hamming distance between #{string1} and #{string2} is #{difference}"

end

point_mutations("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT")


class DNA

    def initialize(string1, string2)
      # Set both instance variables from arguments provided via "DNA.new(arg1, arg2)" call
      @strandOne = string1
      @strandTwo = string2
    end

    def point_mutations

      difference = 0

      @strandOne.chars.each_with_index do |letter, index|

        if letter != @strandTwo[index]
          difference += 1
        end

      end

      p "The hamming distance between #{@strandOne} and #{@strandTwo} is #{difference}"

    end

end

# Make a new object from our DNA class, and initialize it with our two DNA strings
output = DNA.new("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT")
output.point_mutations
