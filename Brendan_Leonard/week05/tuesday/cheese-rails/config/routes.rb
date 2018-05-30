Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # CREATE
  get "/cheeses/new"          => "cheeses#new", as: "cheese_new"
  post "/cheeses"             => "cheeses#create"

  # READ
  get "/cheeses"              => "cheeses#index"
  get "/cheeses/:id"          => "cheeses#show", as: "cheese"

  # UPDATE
  get "/cheeses/:id/edit"     => "cheeses#edit", as: "cheese_edit"
  post "/cheeses/:id"         => "cheeses#update", as: "cheese_update"

  # DELETE
  get "/cheeses/:id/delete"   => "cheeses#delete", as: "cheese_destroy"
end
