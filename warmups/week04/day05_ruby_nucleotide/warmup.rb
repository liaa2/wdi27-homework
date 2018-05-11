require 'pry'
# Write a method to take input
# Then break the input into each character
# See how many times the character appears
# Then increment a number based on how many times it appears
# Show if a character is not a nucleotide


def count_nucleotides(input)

  bases = {
    'A' => 0,
    'C' => 0,
    'G' => 0,
    'T' => 0
  }

  dna = []

  input.upcase.chars do |letter|

    # version 1
    #   is_nucleotide = false
    #   # puts "#{letter}"
    #   bases.each do |key, value|
    #     # puts "#{key}: #{value}"
    #     if letter == key
    #       bases[key] += 1
    #       is_nucleotide = true
    #     end# if
    #   end #bases.each
    #
    #   # unless is_nucleotide
    #   if is_nucleotide == false
    #     dna.push "#{letter} is not a nucleotide"
    #   end # if is_nucleotide
    #
    # end #input.chars
    #
    # bases.each do |key, value|
    #   dna.push "#{key}: #{value}"
    # end # bases.each 2

    # version 2
    # BETTER: instead of looping over the keys in our bases hash, it's much more efficient, and a
    # more appropriate use of the hash data structure, to just see if the bases hash has this
    # letter as a key, which will confirm that the letter is a valid base
    # We can use the .key? predicate method to check for the key - it returns true if the hash has the specificed key
    if bases.key? letter
    # ^ could alternatively write this test as: unless bases[ letter ].nil?
      bases[letter] += 1
    else
      dna.push "#{letter} is not a nucleotide"
    end
  end

  # now that we've finished counting all the bases in our string, we can construct a nicely
  # formatted report of the count of each base in the string
  bases.each do |key, value|
    dna.push "#{key}: #{value}"
  end
  puts dna

end # count_nucleotides

count_nucleotides("MAGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")
