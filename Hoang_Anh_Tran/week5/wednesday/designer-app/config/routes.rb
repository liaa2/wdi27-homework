Rails.application.routes.draw do
  get 'brands/new'
  get 'brands/index'
  get 'brands/show'
  get 'brands/edit'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

root to: "countries#index"

#CREATE
get "/countries/new" => "countries#new"
post "/countries" => "countries#create"




#READ
get "/countries"  => "countries#index"
get "/countries/:id" => "countries#show", as: "country"

#UPDATE

get "/countries/:id/edit" => "countries#edit", as: "country_edit"

patch "/countries/:id" => "countries#update"


#DESTROY
delete "/countries/:id" => "countries#destroy"

# Brands

resources :brands

end
