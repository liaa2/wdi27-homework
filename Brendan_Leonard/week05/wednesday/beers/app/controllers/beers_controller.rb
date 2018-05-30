class BeersController < ApplicationController
  def new
    @beer = Beer.new
  end

  def create
    beer = Beer.create beer_params

    if beer.persisted?
      redirect_to beers_path
    else
      flash[:errors] = beer.errors
      redirect_to new_beer_path
    end
  end

  def index
    @breweries = Brewery.all
  end

  def show
    @beer = Beer.find params[:id]
  end

  def edit
    @beer = Beer.find params[:id]    
  end

  def update
    beer = Beer.find params[:id]
    beer.update beer_params

    if beer.errors.any?
      flash[:errors] = beer.errors
      redirect_to edit_beer_path( beer )
    else
      redirect_to beers_path
    end
  end

  def destroy
    Beer.destroy params[:id]
    redirect_to beers_path
  end

  private

  def beer_params
    params.require(:beer).permit(:brewery_id, :name, :style, :description, :size, :abv, :std_drinks, :image )
  end
end
