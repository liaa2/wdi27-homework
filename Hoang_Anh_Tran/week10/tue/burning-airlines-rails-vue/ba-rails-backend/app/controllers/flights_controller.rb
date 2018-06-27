class FlightsController < ApplicationController
  before_action :authenticate_user, only: [ :show ]



  def search
    puts "origin: #{params[:origin]}"
    puts "origin: #{params[:destination]}"

    results = Flight.where origin: params[:origin], destination: params[:destination]

    # sleep 2 # simulate a slow network ersponse (good for testing mobile!)

    render({
      json: results,
      # include: [ :airplane ], # gives the whole json object of airplane
      include: { airplane: { only: :name } }, # be specific, only wants the "name" field
      methods: :departure_date_formatted, # call this method for every object and include it
      status: :ok

    })
  end

  def show

    p current_user # return user login with token # Knock provides the @current_user method
    # to return to us the user (if any) that was successfully authenticated via the '/user_token' route

    flight = Flight.find params[:id]
    render({
      json: flight,
      status: :ok,
      include: {
        reservations: { except: [:paid, :created_at, :updated_at]},
        airplane:     {only: [:rows, :cols, :name]}
      },
      methods: :departure_date_formatted,
      status: :ok

    })
  end
end
