Rails.application.routes.draw do

  post '/flights/:id' => 'flights#reservation'
  get 'flights/search'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/flights/search' => 'flights#search'
  get '/flights/:id' => 'flights#show'
end
