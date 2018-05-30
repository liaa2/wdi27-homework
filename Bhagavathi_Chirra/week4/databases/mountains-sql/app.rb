require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: "sqlite3",
  database: "database.db"
)

class Mountain < ActiveRecord::Base
  has_many :climbers
end

class Climber < ActiveRecord::Base
  belongs_to :mountain
end

get "/mountains" do
  @mountains = Mountain.all
  erb :mountains_index
end

get "/mountains/new" do
  erb :mountains_new
end

post "/mountains" do
  mountain = Mountain.new
  mountain.name = params[:name]
  mountain.height = params[:height]
  mountain.range = params[:range]
  mountain.parent_mountain = params[:parent_mountain]
  mountain.first_ascent = params[:first_ascent]
  mountain.country = params[:country]
  mountain.image_url = params[:image_url]
  mountain.save
  redirect "/mountains"
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

get "/mountains/:id/delete" do
  mountain = Mountain.find params[:id]
  mountain.destroy
  redirect "/mountains"
end

get "/climbers" do
  @climbers = Climber.all
  erb :climbers_index
end

get "/climbers/new" do
  erb :climber_new
end

get "/climbers/:id" do
  @climber = Climber.find params[:id]
  erb :climber_show
end

get "/climbers/:id/edit" do
  @climber = Climber.find params[:id]
  erb :climber_edit
end

post "/climbers" do
  climber = Climber.new
  climber.first_name = params[:first_name]
  climber.second_name = params[:second_name]
  climber.description = params[:description]
  climber.age_climbed = params[:age_climbed]
  climber.alive = params[:alive]
  climber.nationality = params[:nationality]
  climber.image_url = params[:image_url]
  climber.save
  redirect "/climbers"
end

post "/climbers/:id" do
  climber = Climber.find params[:id]
  climber.first_name = params[:first_name]
  climber.second_name = params[:second_name]
  climber.description = params[:description]
  climber.age_climbed = params[:age_climbed]
  climber.alive = params[:alive]
  climber.nationality = params[:nationality]
  climber.image_url = params[:image_url]
  climber.save
  redirect "/climbers/#{params[:id]}"
end

get "/climbers/:id/delete" do
  climber = Climber.find params[:id]
  climber.destroy
  redirect "/climbers"
end
