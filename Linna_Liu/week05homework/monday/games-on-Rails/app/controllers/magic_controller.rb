class MagicController < ApplicationController
  def home
  end

  def results
    @questions = params[:questions]
    answers = ["It is certain","Yes definitely","Most likely","Signs point to yes","Better not tell you now","Better not tell you now","Don't count on it","Chances aren't good
","Very doubtful"]
   random = Random.new
   random = random.rand(0..8)
   @answer = answers[random]
   # raise "hell"
  end
end
