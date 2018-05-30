class Roman
  # we need to set up this instance variable in our initialize method...
  # we can't just declare it in the class itself - it will not be set
  # NOTE that Class variables DO behave this way, so that is an alternative
  def initialize
    @romans = {
      1000 => 'M',
      900 => 'CM',
      500 => 'D',
      400 => 'CD',
      100 => 'C',
      90 =>  'XC',
      50 =>  'L',
      40 =>  'XL',
      10 =>  'X',
      9  =>  'IX',
      5  =>  'V',
      4  =>  'IV',
      1  =>  'I'
    }
  end

  def to_roman(number)
    output = ''

    # loop through the @romans obj
    @romans.each do |key, value|

      # while the input number is greater than or equal to the key
      while number >= key
        # add the key's value to the output string
        output += value

        # then subtract the key amount from the input number
        number -= key

      end

    end

    output
  end


end # class


test = Roman.new

p test.to_roman(1990)
