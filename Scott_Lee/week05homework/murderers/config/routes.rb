Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: "murderers#index"

  # create: new entry
  get "/murderers/new" => "murderers#new"
  # create: add entry
  post "/murderers" => "murderers#create"

  # read: index of all
  get "/murderers" => "murderers#index"
  # read: single detailed entry

  get "/murderers/:id" => "murderers#show", as: "murderer"

  # update: form page
  get "/murderers/:id/edit" => "murderers#edit", as: "murderer_edit"

  # update: submit
  post "/murderers/:id" => "murderers#update"

  # delete
  get "murderers/:id/delete" => "murderers#destroy", as: "murderer_destroy"

end
