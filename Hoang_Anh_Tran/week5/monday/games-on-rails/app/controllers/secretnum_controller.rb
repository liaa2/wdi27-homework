class SecretnumController < ApplicationController

  # Loads view app/views/secretnum/home.html.erb
  def home
  end

  # Loads values into view app/views/secretnum/guess.html.erb
  def guess
    @guess = params[:guessednum].to_i
    @random_answer = Random.rand(1..10)
    # compare guess and answer.
    if @guess == @random_answer
      render "win"
    else
      render "lose"
    end
  end

end
