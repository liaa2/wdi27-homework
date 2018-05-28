class BreweriesController < ApplicationController
  def new
    @brewery = Brewery.new
  end

  def create
    brewery = Brewery.create brewery_params

    if brewery.persisted?
      redirect_to breweries_path
    else
      flash[:errors] = brewery.errors
      redirect_to new_brewery_path
    end
  end

  def index
    @breweries = Brewery.all
  end

  def show
    @brewery = Brewery.find params[:id]
  end

  def edit
    @brewery = Brewery.find params[:id]
  end

  def update
    brewery = Brewery.find params[:id]
    brewery.update brewery_params

    if brewery.errors.any?
      flash[:errors] = brewery.errors
      redirect_to edit_brewery_path( brewery )
    else
      redirect_to breweries_path
    end
  end

  def destroy
    Brewery.destroy params[:id]
    redirect_to breweries_path
  end

  private

  def brewery_params
    params.require(:brewery).permit(:name, :country, :region, :founded, :logo_image )
  end
end
