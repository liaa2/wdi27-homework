require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

def db_query(sql)
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  # puts "="*100
  # puts sql
  # puts "="*100
  result = db.execute(sql)
  db.close
  result
end


get "/men" do
  @men = db_query("SELECT * FROM men;")
  # puts "="*100
  # puts @men
  # puts "="*100
  # require 'pry'; binding.pry

  erb :main
end

get "/men/new" do
  erb :new
end

post "/men" do
  sql = "INSERT INTO men (name, country, height_in_cm, age_at_death, note, image_url)
         VALUES(
           '#{ params["name"] }',
           '#{ params["country"] }',
            #{ params["height_in_cm"] },
            #{ params["age_at_death"] },
           '#{ params["note"] }',
           '#{ params["image_url"]}'
        );"
  db_query(sql)

  redirect "/men"
end


get "/men/:id" do
  id = params[:id]
  @men = db_query("SELECT * FROM men WHERE id = #{params["id"]};")
  @men = @men.first
  erb :details
end

get "/men/:id/edit" do
  @men = db_query("SELECT * FROM men WHERE id = #{params[:id]}")
  @men = @men.first
  erb :edit
end

post "/men/:id" do
  sql = "UPDATE men SET
   name = '#{ params["name"] }',
   country = '#{ params["country"] }',
   height_in_cm = #{ params["height_in_cm"] },
   age_at_death = #{ params["age_at_death"] },
   note = '#{ params["note"] }',
   image_url = '#{ params["image_url"]}'
  WHERE id = #{params[:id]}"

  db_query(sql)

  redirect "/men/#{params["id"]}"
end

get "/men/:id/delete" do
  db_query("DELETE FROM men WHERE id = #{params[:id]}")
  redirect "/men"
end


post "/search" do
  @men = db_query("SELECT * FROM men WHERE name = #{params[:name]} ;") 
  @result = @men.select(|key| key[:name].match())
  @result = @result.first
  redirect "/men/<%= @result["id"] %>"
end
