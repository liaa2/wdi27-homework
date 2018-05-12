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

post "/mountains/:id" do
  mountain = Mountain.find params[:id]
  mountain.name = params[:name]
  mountain.height = params[:height]
  mountain.range = params[:range]
  mountain.parent_mountain = params[:parent_mountain]
  mountain.first_ascent = params[:first_ascent]
  mountain.country = params[:country]
  mountain.image_url = params[:image_url]
  mountain.save
  redirect "/mountains/#{params[:id]}"
end
