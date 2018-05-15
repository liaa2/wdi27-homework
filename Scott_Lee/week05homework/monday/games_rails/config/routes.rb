Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"

  get "/magic" => "magic#home"

  get "/magic/:x" => "magic#answer"

  get "/secret" => "secret#home"

  get "/secret/result" => "secret#result"

  get "/rps" => "rps#home"

  get "/rps/:throw" => "rps#outcome"
end
