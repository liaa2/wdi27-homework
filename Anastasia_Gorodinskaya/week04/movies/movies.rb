require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# display empty form
get "/search" do
  erb :search_form
end

# form submits to here
get "/search/results" do

  # Make remote API request
  API_KEY = "24d863d54c86392e6e1df55b9a328755"
  @query  = params[ :query ]

  url = "https://api.themoviedb.org/3/search/movie?api_key=#{ API_KEY }&query=#{ @query }"
  puts "API URL:", url

  @results = HTTParty.get( url )

  @img_base_url = "https://image.tmdb.org/t/p/w185"

  erb :search_result
end

get "/details/:movie_id" do
  API_KEY = "24d863d54c86392e6e1df55b9a328755"
  @movie_id = params[ :movie_id ]
  url_1 = "https://api.themoviedb.org/3/movie/#{ @movie_id }?api_key=#{ API_KEY }"

  #https://api.themoviedb.org/3/movie/1891?api_key=24d863d54c86392e6e1df55b9a328755

  puts "Movie details:", url_1

  @resultsnew = HTTParty.get( url_1 )

  erb :details
end

# get '/moviedet/:movie_id' do
# "Hello World"
# end

  # the themoviedb.org sizes
# after 3 / movie/348
