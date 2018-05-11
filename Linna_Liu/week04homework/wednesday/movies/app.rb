# require 'sinatra'
# require 'sinatra/reloader'
# require 'httparty'
#
# #display empty form
# get "/search" do
#   erb :search_form
# end
#
#
# get "/search/results" do
#
#   API_KEY="24d863d54c86392e6e1df55b9a328755"
#   @query = params[:query]
#   url = "https://api.themoviedb.org/3/search/movie?api_key=#{API_KEY}&query=#{@query}"
#   # https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=alien
#   puts "API URL:", url
#
#   @results = HTTParty.get(url)
#
#   @img_base_url = "https://image.tmdb.org/t/p/w185"
#   #
#   # @id_base_url = "https://api.themoviedb.org/3/movie/"
#   # # @id_url = "https://api.themoviedb.org/3/movie/#{@id}?api_key=#{API_KEY}"
#   # @api_key = "?api_key=24d863d54c86392e6e1df55b9a328755"
#
#   erb :search_results
# end
#
# get "/details/:movie_id" do
#   API_KEY="24d863d54c86392e6e1df55b9a328755"
#   @id = params[:movie_id]
#   url = "https://api.themoviedb.org/3/movie/#{@id}?api_key=#{API_KEY}"
#   @result_id = HTTParty.get(url)
#   # https://api.themoviedb.org/3/movie/348?api_key=24d863d54c86392e6e1df55b9a328755
#   erb :details
# end


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

  @id_base_url = "https://api.themoviedb.org/3/movie/"
  # require 'pry'; binding.pry

  # @id = params[:movie_id]
  #

  @api = "?api_key=24d863d54c86392e6e1df55b9a328755"

  # puts "ID URL", @url_id

  erb :search_results
end


get "/details/#{@id}" do
  API_KEY = "24d863d54c86392e6e1df55b9a328755"
  url = "https://api.themoviedb.org/3/movie/#{@id}?api_key=#{ API_KEY }"
  @results2 = HTTParty.get( url )
  @id =
end
