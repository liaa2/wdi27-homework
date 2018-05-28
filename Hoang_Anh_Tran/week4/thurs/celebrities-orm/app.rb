require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


def db_query(sql)
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  puts "="*100
  puts sql
  puts "="*100
  result = db.execute(sql)
  db.close # close the connection
  result
end


# show Add celebrities form
get "/celebrities/new" do
  erb :new
end




# Add celebrities form submits here, to create row in DB

post "/celebrities" do
  sql = "INSERT INTO celebrities(first_name, last_name, occupation, famous_for, alive, age, image_url)
      VALUES (
          '#{ params["first_name"] }',
          '#{ params["last_name"] }',
          '#{ params["occupation"] }',
          '#{ params["famous_for"] }',
           #{ params["alive"] },
           #{ params["age"] },
          '#{ params["image_url"]}'
        );"
  db_query(sql)
  redirect "/celebrities" # no template for the create, redirect to index
end

# index of Celebrities
get "/celebrities" do
  @celebrities = db_query("SELECT * FROM celebrities;")

  erb :index
end

get "/celebrities/:id" do
  id = params[:id]
  @celebrity = db_query("SELECT * FROM celebrities WHERE id = #{id};") # array of every result
  @celebrity = @celebrity.first

  erb :show
end

get "/celebrities/:id/edit" do
  id = params[:id]
  @celebrity = db_query("SELECT * FROM celebrities WHERE id = #{id};")
  @celebrity = @celebrity.first

  erb :edit
end


post "/celebrities/:id" do
  sql = "UPDATE celebrities SET
    first_name = '#{ params["first_name"] }',
    last_name = '#{ params["last_name"] }',
    occupation = '#{ params["occupation"] }',
    famous_for = '#{ params["famous_for"] }',
    alive = #{ params["alive"] },
    age = #{ params["age"] },
    image_url = '#{ params["image_url"] }'
    WHERE id = #{ params[:id] };"
  db_query(sql)
  redirect "/celebrities/#{ params["id"]}"
end


get "/celebrities/:id/delete" do
  db_query("DELETE FROM celebrities WHERE id = #{params["id"]};")
  redirect "/celebrities"
end
