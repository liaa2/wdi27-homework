Rails.application.routes.draw do
  get '/flights/search' => 'flights#search'
  get '/flights/:id' => 'flights#show'

  # params :flightnum, :row, :col
  post '/reservation/create' => 'reservations#create'
end
