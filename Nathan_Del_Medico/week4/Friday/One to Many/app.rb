
require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: "sqlite3",
  database: "database.db"
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Team < ActiveRecord::Base
  belongs_to :country
end

class Country < ActiveRecord::Base
  has_many :teams
end

require 'pry'; binding.pry

get "/countries" do
  @countries = Country.all
  erb :countries_index
end

get "/countries/:id" do
  @country = Country.find params[:id]
  erb :countries_show
end

get "/teams" do
  @teams = Team.all
  erb :teams_index
end

get "/teams/:id" do
  @team = Team.find params[:id]
  erb :teams_show
end
