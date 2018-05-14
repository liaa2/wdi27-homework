class RockpaperController < ApplicationController

  # Loads view app/views/rockpaper/home.html.erb
  def home
  end

  def play

    choices = ["rock", "paper", "scissors"]
    @player = params[:throw]

    @computer = choices.sample

    @winner = ''


    if ( @player == "rock" && @computer == "rock" )
      @winner = "DRAW"
    end
    if ( @player == "rock" && @computer == "paper" )
      @winner = "COMPUTER WINS"
    end
    if ( @player == "rock" && @computer == "scissors" )
      @winner = "YOU WIN"
    end

    if ( @player == "paper" && @computer == "rock" )
      @winner = "YOU WIN"
    end
    if ( @player == "paper" && @computer == "paper" )
      @winner = "DRAW"
    end
    if ( @player == "paper" && @computer == "scissors" )
      @winner = "COMPUTER WINS"
    end

    if ( @player == "scissors" && @computer == "rock" )
      @winner = "COMPUTER WINS"
    end
    if ( @player == "scissors" && @computer == "paper" )
      @winner = "YOU WIN"
    end
    if ( @player == "scissors" && @computer == "scissors" )
      @winner = "DRAW"
    end

  end

end
