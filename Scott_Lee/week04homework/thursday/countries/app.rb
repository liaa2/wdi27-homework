require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

def db_query( sql )
    db = SQLite3::Database.new("database.db")
    db.results_as_hash = true
    result = db.execute( sql )
    db.close
    result
end

# Home index
get "/countries" do
    sql = "SELECt * FROM countries;"
    @countries = db_query( sql )

    erb :index
end

# add country (display form)
get "/countries/add" do
    erb :add
end

# add country (submit info)
post "/countries" do
    sql = "INSERT INTO countries ( name, population, continent, language, explored )
        VALUES(
            '#{params["name"]}',
            #{params["population"]},
            '#{params["continent"]}',
            '#{params["language"]}',
            #{params["explored"]}
        );"
    db_query( sql )

    redirect "/countries"
end


# Detailed info
get "/countries/:id" do
    @id = params["id"]
    sql = "SELECT * FROM countries WHERE id = #{@id};"
    @country = db_query( sql )
    @country = @country.first

    erb :detail
end

# update (retrieve info)
get "/countries/:id/update" do
    @id = params[:id]
    @country = db_query( "SELECT * FROM countries WHERE id = #{@id};" )
    @country = @country.first

    erb :update
end

# update (submit info)
post "/countries/:id" do
    sql = "UPDATE countries SET
        name = '#{params["name"]}',
        population = #{params["population"]},
        continent = '#{params["continent"]}',
        language = '#{params["language"]}',
        explored = #{params["explored"]}
        WHERE id = #{params[:id]}
    "

    db_query( sql )
    redirect "/countries/#{params[:id]}"
end

# delete
get "/countries/:id/delete" do
    sql = "DELETE FROM countries WHERE id = #{ params["id"] }"
    db_query( sql )
    redirect "/countries"
end