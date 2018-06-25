class Calculator

  def initialize(question)
    @question = question
    matches
  end

  def matches
    # See http://ruby-doc.org/core-2.1.4/Regexp.html for more on the .match

    # using regex to select the digits and operators

    # here are some examples
    # /(\d)/
    # => #<MatchData "1" 1:"1">
    #
    # /(\d) (\w+)/
    # # match a full word regardless of length
    # => #<MatchData "3 plus" 1:"3" 2:"plus">
    #
    # /(\d) (\w+) (\d)/
    # # will match a second digit after the word
    # => #<MatchData "3 plus 4" 1:"3" 2:"plus" 3:"4">
    #
    # /(\d+) (\w+) (\d+)/
    # # will match multiple numbers
    # => #<MatchData "123 plus 45678" 1:"123" 2:"plus" 3:"45678">
    #
    # /(-?\d) (\w+) (\d)/
    # # will match if there is a negative
    # => #<MatchData "-3 plus 4" 1:"-3" 2:"plus" 3:"4">

    # -? matches the character - literally (case sensitive)
    # \d+ matches a digit (equal to [0-9])
    @matches = @question.match( /(-?\d+) (plus|minus|multiplied by|divided by) (-?\d+)/ )
    puts "#{@matches}"

    # @matches.nil? ? ( raise ArgumentError, "That's too complicated!" ) : @matches

  end# end

  def first_number
    puts "@matches[1]: #{@matches[1]}"
    @matches[1].to_i
  end# first_number

  def second_number
    puts "@matches[3]: #{@matches[3]}"
    @matches[3].to_i
  end# first_number

  def operation
    # A colon : before a sequence of characters* is a Symbol literal. This applies to :+, which is a Symbol with content "+"
    # [1, 2, 3].inject(:+)
    # equals
    # [1, 2, 3].inject { |a, b| a + b }
    # Sum some numbers
    # (5..10).reduce(:+) #=> 45
    puts "@operation: #{@matches[2]}"
    case @matches[2]
    when 'plus' then :+
    when 'minus' then :-
    when 'multiplied by' then :*
    when 'divided by' then :/
    end # case
  end # second_number

  def answer
    # See http://ruby-doc.org/core-2.3.0/Object.html#method-i-send for more on the .send method
    # The first argument to send( ) is the message that you're sending to the object - that is, the name of a method. You can use a string or a symbol, but symbols are preferred. Any remaining arguments are simply passed on to the method.
    # 1.send '+', 2
    # 1.+(2)
    # 1 + 2
    @answer = first_number.send(operation, second_number)

  end#end

end #Calculator

c = Calculator.new('what is -10 divigsasdhjksadjded by -5?')
puts c.answer
