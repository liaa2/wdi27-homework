class ReservationsController < ApplicationController
  skip_before_action :verify_authenticity_token


  # render :json => reservation
  def create
    # newres = Reservation.new reservation_params
    # newres.flight = Flight.find_by flight_number: params[:flightnum]
    # newres.passenger = fake_passenger
    # newres.row = params[:row]
    # newres.col = params[:col]
    # newres.save
    newres = Reservation.create row: params[:row], col: params[:col], flight_id: params[:flight_id], passenger: fake_passenger

    render json: newres
  end

  def fake_passenger
    User.first
  end

  private

  def reservation_params
    params.permit(:flight_id, :passenger_id, :row, :col)
  end

end
