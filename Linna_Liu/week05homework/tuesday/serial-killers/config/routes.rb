Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/killers/new" => "killers#new"
  post "/killers" => "killers#create"

  get "/killers" => "killers#index"
  get "/killers/:id" => "killers#details", as: "killer"

  get "/killers/:id/edit" => "killers#edit", as: "killer_edit"
  post "/killers/:id" => "killers#update"

  get "/killers/:id/delete" => "killers#delete", as: "killer_delete"
end
