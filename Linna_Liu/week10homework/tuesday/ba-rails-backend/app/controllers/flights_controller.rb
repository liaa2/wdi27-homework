class FlightsController < ApplicationController
  before_action :authenticate_user, only:[:show]
  skip_before_action :verify_authenticity_token

  def search
    puts "origin: #{params[:origin]}"
    puts "destination: #{params[:destination]}"

    #use where instead of find_by for multiple results search
    results = Flight.where origin: params[:origin], destination: params[:destination]

    # sleep 2 #simulate a slow network response (good for testing mobile!)

    render({
      json: results,
      # include: [:airplane], #gets all fields of associations
      include: {airplane: {only: :name}}, #force ActiveRecord associations to be included
      methods: :departure_date_formatted, #call this method for every object and include it
      status: :ok,
    })
  end

  def show
    #Knock provides the method to return to us the user (if any) that was successfully
    #authenticated via the '/user_token' route
    p current_user
    result = Flight.find params[:id];
    render({
      json: result,
      include: {
        reservations: {except: [:paid, :created_at, :updated_at]},
        airplane: {only: [:rows, :cols, :name]}
      },
      methods: :departure_date_formatted,
      status: :ok
      })
  end

  def reservation
    p current_user
    puts "="*100
    reservation = Reservation.create row: params[:row], col: params[:col], user_id: current_user.id, flight_id: params[:id]
    render({
      json: reservation,
      methods: :user_details,
      status: :ok
    })
  end
end
