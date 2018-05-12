require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: "sqlite3",
  database: "database.db"
)

class Mountain < ActiveRecord::Base
end

get "/mountains" do
  @mountains = Mountain.all
  erb :mountains_index
end

get "/mountains/:id" do
  @mountain = Mountain.find params[:id]
  erb :mountain_show
end

get "/mountains/:id/edit" do
  @mountain = Mountain.find params[:id]
  erb :mountains_edit
end
