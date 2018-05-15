Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

# Magic 8 ball
# Loads model in app/controllers/magic_controller.rb
get "/games/magic"  => "magic#home" # magic controller, home method
get "/games/magic/:question"  => "magic#answer" # magic controller, answer method


# Secret number
# Loads model in app/controllers/secretnum_controller.rb
get "/games/secretnum"  => "secretnum#home" # magic controller, home method
# A route for when the user clicks and submits a number.
get "/games/secretnum/guess"  => "secretnum#guess" # secretnum controller, guess method

# Rock paper scissors
# Loads model in app/controllers/rockpaper_controller.rb
get "/games/rockpaper"    => "rockpaper#home"
# :throw is the users input - ie, /games/rockpaper/rock 
get "/games/rockpaper/:throw"    => "rockpaper#play"

end
