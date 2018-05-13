require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# display empty form
get "/search" do
  erb :search_form
end

#for submit to here
get "/search/results" do
  # make remote API request
  API_KEY = "24d863d54c86392e6e1df55b9a328755"
  @query =  params[:query]

  url =
  "https://api.themoviedb.org/3/search/movie?api_key=#{ API_KEY }&query=#{@query}"
  puts "API URL:", url

  @results = HTTParty.get(url)

  @img_base_url = "https://image.tmdb.org/t/p/w185"

  erb :search_results
end


get "/search/details/:movie_id" do
  API_KEY = "24d863d54c86392e6e1df55b9a328755"
  @query =  params[:query]
  @movie_id = params[:movie_id]
  url =
  "https://api.themoviedb.org/3/movie/#{@movie_id}?api_key=#{ API_KEY }"
  puts "API URL:", url

  @results = HTTParty.get(url)
  @img_base_url = "https://image.tmdb.org/t/p/w500"

  erb :details
end
