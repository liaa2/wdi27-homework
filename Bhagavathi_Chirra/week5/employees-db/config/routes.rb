Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #get "/employees" => "employees#new"

  # CREATE
  get "/employees/new" => "employees#new"
  post "/employees" => "employees#create"

  # READ
  get "/employees" => "employees#index"
  get "/employees/:id" => "employees#show", as: "employee"

  # UPDATE
  get "/employees/:id/edit" => "employees#edit", as: "employee_edit"
  post "/employees/:id" => "employees#update"

  # DELETE
  get "/employees/:id/delete" => "employees#delete", as: "employee_delete"


end
