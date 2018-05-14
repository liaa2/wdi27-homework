require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get "/search" do
  erb :search_form
end

get "/search/results" do
  API_KEY = "24d863d54c86392e6e1df55b9a328755"
  @query = params[ :query ]

  url = "https://api.themoviedb.org/3/search/movie?api_key=#{API_KEY}&query=#{@query}"
  puts "API URL:", url
  @results = HTTParty.get(url)

  @img_base_url = "https://image.tmdb.org/t/p/w185"

  erb :search_results
end

get "/details/:movie_id" do
  API_KEY = "?api_key=24d863d54c86392e6e1df55b9a328755"
  @movie_id = params[:movie_id]
  url = "https://api.themoviedb.org/3/movie/#{@movie_id}#{API_KEY}"
  @results = HTTParty.get(url)
  @img_base_url = "https://image.tmdb.org/t/p/w300"

  API_KEY2 = "24d863d54c86392e6e1df55b9a328755"
  url2 = "https://api.themoviedb.org/3/movie/#{@movie_id}/credits?api_key=#{API_KEY2}"
  @results2 = HTTParty.get(url2)
  erb :details
end
