class GamesController < ApplicationController

  def rock_paper_scissors_pick
  end

  def rock_paper_scissors_play
    @throw = params[:throw]
    # raise "hell"
    choices = ["rock","paper","scissors"]
    random = Random.new
    random = random.rand(0..2)
    @randomPick = choices[random]
    # raise "hell"
  end
end
