require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
    adapter: "sqlite3",
    database: "database.db"
)

ActiveRecord::Base.logger = Logger.new( STDERR )

# need to see some syntax on how this works
class Pet < ActiveRecord::Base
    belongs_to :owner
end

class Owner < ActiveRecord::Base
    has_many :pets
end

def db_query( sql )
    db = SQLite3::Database.new("database.db")
    db.results_as_hash = true
    result = db.execute( sql )
    db.close
    result
end

# pet home page
get "/pets" do
    # sql = "SELECT * FROM pets;"
    # @apets = db_query( sql )
    @pets = Pet.all

    haml :pets_index
end

# add new pet
get "/pets/new" do
    haml :pets_new
end

# add new pet
post "/pets" do
    # is there a difference between Pet.new and Pet.create?
    pet = Pet.new
    pet.first_name = params["first_name"]
    pet.last_name = params["last_name"]
    pet.species = params["species"]
    pet.age = params["age"]
    pet.sex = params["sex"]
    pet.picture = params["picture"]
    pet.description = params["description"]
    pet.save

    redirect "/pets"
end

# display page for each pet
get "/pets/:id" do
    @pet = Pet.find(params[:id])

    haml :pets_display
end

# update & show edit form
get "/pets/:id/edit" do
    @pet = Pet.find(params[:id])

    haml :pets_edit
end

# take update into to db
post "/pets/:id" do
    pet = Pet.find(params[:id])
    pet.first_name = params[:first_name]
    pet.last_name = params[:last_name]
    pet.species = params[:species]
    pet.age = params[:age]
    pet.sex = params[:sex]
    pet.picture = params[:picture]
    pet.description = params[:description]
    pet.save

    redirect "/pets/#{params[:id]}"
end

# delete entry and redirect to pet index page
get "pets/:id/delete" do
    Pet.destroy(params[:id])

    redirect "/pets"
end

# empty owner form
get "/owners/new" do
    haml :owners_new
end

# return to owner index with new owner
post "/owners" do
    owner = Owner.new
    owner.name = params[:name]
    owner.location = params[:location]
    owner.owns = params[:owns]
    owner.save

    redirect "/owners"
end

get "/owners" do
    @owners = Owner.all
    haml :owners_index
end

get "/owners/:id" do
    @owner = Owner.find(params[:id])
    haml :owners_display
end