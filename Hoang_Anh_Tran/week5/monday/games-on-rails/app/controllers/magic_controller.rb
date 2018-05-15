class MagicController < ApplicationController

  # Loads view app/views/magic/home.html.erb
  def home
  end

  # Loads view app/views/magic/answer.html.erb
  def answer
    # this param was defined in route as - /games/magic/:question
    @question = params[:question].to_s
    @answer = ['You are a strong independant human',
               'You may find luck elsewhere',
               'Try again later',
               'The answer is right in front of your',
               'The answer is behind you',
               'You must learn the ways of the squirrel',
               'Nah...',
               '8balls R lame'].sample
  end

end
