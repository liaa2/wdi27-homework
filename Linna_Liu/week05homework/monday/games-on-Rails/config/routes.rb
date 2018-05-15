Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  get "/magic" => "magic#home"
  get "/magic/results" => "magic#results"

  get "/numbers" => "numbers#home"
  get "/numbers/results" => "numbers#results"

  get "/games/rock_paper_scissors" => "games#rock_paper_scissors_pick"
  get "/games/rock_paper_scissors/play" => "games#rock_paper_scissors_play"
  get "/games/rock_paper_scissors/:throw" => "games#rock_paper_scissors_play"

end
