Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  get '/flights/search'

  post '/flights/:id' => "flights#reservation"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/flights/search' => 'flights#search'
  get '/flights/:id' => 'flights#show'
end
