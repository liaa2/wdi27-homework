require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get "/search" do
    erb :search_form
end

get "/search/results" do

    # make remote API request

    @API_KEY = "24d863d54c86392e6e1df55b9a328755"

    @query = params[:query]
    search_url = "https://api.themoviedb.org/3/search/movie?api_key=#{@API_KEY}&query=#{@query}"

    @results = HTTParty.get( search_url )
    
    @img_base_url = "https://image.tmdb.org/t/p/w185"

    erb :search_results
end

get "/info/:id" do
   

    @API_KEY = "24d863d54c86392e6e1df55b9a328755"
    @id = params[ :id ].to_i 

    movie_url = "https://api.themoviedb.org/3/movie/#{@id}?api_key=#{@API_KEY}"
    @movie = HTTParty.get( movie_url )

    credits_url = "https://api.themoviedb.org/3/movie/#{@id}/credits?api_key=#{@API_KEY}"
    @credits = HTTParty.get( credits_url )

    @actor_base_img = "https://image.tmdb.org/t/p/w185/"
    erb :info
end