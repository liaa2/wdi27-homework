Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html



  #CREATE
    get "/serialkillers/new" => "serialkillers#new"
    post "/serialkillers"    => "serialkillers#create"

    #READ
    get "/serialkillers"      => "serialkillers#index"

    get "/serialkillers/:id"  => "serialkillers#show", as: 'serialkiller'


    #UPDATE
    get "/serialkillers/:id/edit"   => "serialkillers#edit", as: "serialkiller_edit" #serialkiller_edit_path
    post "/serialkillers/:id"       => "serialkillers#update"

    #DELETE
    get "/serialkillers/:id/delete" => "serialkillers#destroy", as: "serialkiller_destroy" #serialkiller_destroy_path

  end
