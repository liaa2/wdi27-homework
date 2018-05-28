# require 'pr'; binding.pry

class Luhn

  def initialize(number)
    @number = number
  end #init

  def luhnify
    numbers = []

    @number.to_s.chars.reverse.map(&:to_i).each_with_index do |digit, index|
      # @number.to_s = '3558'
      # @number.to_s.chars = ['3', '5', '5' '8']
      # @number.to_s.chars.reverse = ['8', '5', '5' '3']
      # @number.to_s.chars.reverse.map(&:to_i) = [8, 5, 5, 3]

      # [8, 5, 5,  3].each_with_index =
        # digit: 8, index: 0
        # digit: 5, index: 1
        # digit: 5, index: 2
        # digit: 3, index: 3

      # Multiply every second number by 2
      # if index.even?
      #   value = digit
      # else
      #   value = digit * 2
      # end
      value = index.even? ? digit : digit * 2
      # value *= 2 if index.odd?
      # [8, 5 * 2, 5, 3 * 2] = [8, 10, 5, 6]

      if value > 10
        value = value - 9
      end

      numbers << value
      p numbers
      # numbers = [8, 10, 5, 6]

    end # @number.each

      numbers.reverse
      # numbers = [6, 5, 10, 8]

  end # luhnify

  def valid
    # [6, 5, 10, 8].inject(0) do |sum, num|
    #   sum + num
    #    0 + 6
    #    6 + 5 = 11
    #    11 + 10 = 21
    #    21 + 8 = 29
    #    29
    # end
    total = luhnify.inject(0, :+)

    if total % 10 == 0 # if 29 % 10 == 0 (false)
      puts "#{@number} is a valid luhn number"
    else
      number = @number + (10 - total % 10)
      # total = 29 % 10 = 9
      # 10 - 29 % 10 = 1
      # 3558 + 1 = 3559
      puts "#{@number} would be a valid luhn number"

  end
end


end # luhn

# input -> 3354
#
test = Luhn.new(3558)

test.valid
