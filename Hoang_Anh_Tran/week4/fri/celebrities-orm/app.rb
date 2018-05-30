require 'sinatra'
require 'sinatra/reloader'
# require 'sqlite3'



require 'active_record'


ActiveRecord::Base.establish_connection(
  adapter: "sqlite3",
  database: "database.db"
)


ActiveRecord::Base.logger = Logger.new(STDERR)


class Celebrity < ActiveRecord::Base
  belongs_to :city
end


class City < ActiveRecord::Base
  has_many :celebrities
end


# show Add celebrities form
get "/celebrities/new" do
  erb :celebrities_new
end




# Add celebrities form submits here, to create row in DB

post "/celebrities" do
  celebrity = Celebrity.new

  celebrity.first_name = params[:first_name]
  celebrity.last_name = params[:last_name]
  celebrity.occupation = params[:occupation]
  celebrity.famous_for = params[:famous_for]
  celebrity.alive = params[:alive]
  celebrity.age = params[:age]
  celebrity.image_url = params[:image_url]
  celebrity.city_id = params[:city_id]

  celebrity.save
  redirect "/celebrities" # no template for the create, redirect to index
end


# index of Celebrities
get "/celebrities" do
  @celebrities = Celebrity.all

  erb :celebrities_index
end

#READ 2 : show page
get "/celebrities/:id" do
  @celebrity = Celebrity.find params[:id]
  erb :celebrities_show
end

get "/celebrities/:id/edit" do
  @celebrity = Celebrity.find params[:id]

  erb :celebrities_edit
end

#UPDATE 2
post "/celebrities/:id" do
  celebrity = Celebrity.find params[:id]



  celebrity.first_name = params[:first_name]
  celebrity.last_name = params[:last_name]
  celebrity.occupation = params[:occupation]
  celebrity.famous_for = params[:famous_for]
  celebrity.alive = params[:alive]
  celebrity.age = params[:age]
  celebrity.image_url = params[:image_url]
  celebrity.city_id = params[:city_id]

  celebrity.save

  redirect "/celebrities/#{ params["id"]}"
end

#DELETE
get "/celebrities/:id/delete" do
  celebrity = Celebrity.find params[:id]
  celebrity.destroy

  redirect "/celebrities"
end



#Cities CRUD system


# CREATE part 1: empty form

get "/cities/new" do

  erb :cities_new

end

# CREATE 2: form submits to here

post "/cities" do

  city = City.new
  city.name = params[:name]
  city.image_url = params[:image_url]

  city.save

  redirect "/cities"
end


#READ1 : index of all cities_name

get "/cities" do
  @cities = City.all

  erb :cities_index
end


#READ 2 : show page
get "/cities/:id" do
  @city = City.find params[:id]
  erb :cities_show
end

#UPDATE part 1
get "/cities/:id/edit" do
  @city = City.find params[:id]

  erb :cities_edit
end


#UPDATE part2

post "/cities/:id" do
  city = City.find params[:id]
  city.name = params[:name]
  city.image_url = params[:image_url]

  city.save

  redirect "/cities/#{params["id"]}"
end


#DELETE

get "/cities/:id/delete" do

  city = City.find params[:id]
  city.destroy
  redirect "/cities"
end
