=begin
1 Create a class which accepts an input
2 Create an 'encode' method which take the input
(obtained in (1) above) and rebuilds it with the reverse alphabet
=end

require 'pry'

class Atbash

  #take an input, downcase it and save the input as an instance variable
  def initialize(input)
    @word = input.downcase

    #create an array of the alphabet, reverse it an store the two in variables
    @alphabet = ('a'..'z').to_a
    @reverse_alphabet = @alphabet.reverse
  end

  def encode
    message = ''

    # Call a method on the @word string that will return an array
    # few ways
    # @word.split("").each |letter|
    # @word.chars.each do |letter|
    # @word.each_char do |letter|
      # index = @alphabet.index(c)
    # end

    @word.chars do |letter|
      # p "#{letter}"

      #find where each letter appears in the normal alphabet
      index  = @alphabet.find_index(letter)

      #use that index on the reverse alphabet
      cipher_letter = @reverse_alphabet[index]

      #build out the message adding all of the individual letters together
      message += cipher_letter
    end

  # Ruby implicit return 
  message

  end

end

puts "What is your secret word?"
secret = gets.chomp


cipher = Atbash.new(secret)

p "The encoded word is #{cipher.encode}"
