Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


    #  create

  get "/boxcats/new" => "boxcats#new"
  post "/boxcats" => "boxcats#create"

    #read
  get "/boxcats" => "boxcats#index", as: "boxcat_index"

  get "/boxcats/:id" => "boxcats#show", as: "boxcat"

  #edit/update

  get "/boxcats/:id/edit" => "boxcats#edit", as: "boxcat_edit"
  post "/boxcats/:id"  => "boxcats#update"


  #delete
  get "/boxcats/:id/delete" => "boxcats#destroy", as: "boxcat_destroy"

  # get "/boxcats/:id/delete" => "boxcats#timer", as: "boxcat_index"

end
