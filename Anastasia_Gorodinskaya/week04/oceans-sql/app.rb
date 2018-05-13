require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

def db_query( sql )
  db = SQLite3::Database.new( "database.db" )
  db.results_as_hash = true
  puts "=" * 100
  puts sql
  puts "=" * 100
  result = db.execute( sql )
  db.close
  result
end

# index of all oceans
get "/oceans" do
  db = SQLite3::Database.new( "database.db" )
  db.results_as_hash = true
  @oceans = db.execute( "SELECT * FROM oceans;" )

  erb :index
end


get "/oceans/new" do
  erb :new
end


post "/oceans" do
  id = params[:id]
  sql = "INSERT INTO oceans ( name, location, area, volume, avg_depth, coastline, image_url )
         VALUES(
           '#{ params["name"] }',
           '#{ params["location"] }',
            #{ params["area"] },
            #{ params["volume"] },
            #{ params["avg_depth"] },
            #{ params["coastline"] },
           '#{ params["image_url"]}'
         );"
  db_query( sql )
  redirect "/oceans"
end

get "/oceans/:id" do
  id = params[:id]
  @ocean = db_query( "SELECT * FROM oceans WHERE id = #{ id };" )
  @ocean = @ocean.first

  erb :show
end

get "/oceans/:id/edit" do
  @ocean = db_query( "SELECT * FROM oceans WHERE is = #{ params["id"]};")
  @ocean = @ocean.first
  erb :edit
end

post "/oceans/:id" do
  sql = "UPDATE oceans SET
    name = '#{ params["name"] }',
    location = '#{ params["location"] }',
    area =  #{ params["area"] },
    volume = #{ params["volume"] },
    avg_depth = #{ params["avg_depth"] },
    coastline = #{ params["coastline"] },
    image_url = '#{ params["image_url"]}'
    WHERE id = #{ params[:id] };"

db_query( sql )

redirect "/oceans/#{params[:id]}"
end

# DELETE: remove item from DB and redirect to index
get "/oceans/:id/delete" do
  db_query( "DELETE FROM oceans WHERE id = #{ params["id"] };" )
  redirect "/oceans"
end
