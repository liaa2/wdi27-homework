class CountriesController < ApplicationController


  #CREATE

  def new
    @country = Country.new
  end

  def create
    country = Country.create country_params

    if country.persisted?
      redirect_to countries_path
    else
      flash[:errors] = country.errors
      redirect_to countries_new_path
    end
  end


  #READ
  def index
    @countries = Country.all
  end

  def show
    @country = Country.find params[:id]
  end




  #UPDATE

  def edit
      @country = Country.find params[:id]
    end

    def update
      country = Country.find params[:id]
      country.update country_params

      if country.errors.any?
        flash[:errors] = country.errors
        redirect_to country_edit_path( country )
      else
      redirect_to country_path( country )
      end
    end





  #DESTROY

  def destroy
  Country.destroy params[:id] #artist = Artist.find params[:id]
  redirect_to countries_path
  end

  private # everything below this is only accessible from inside the method
  #strong params in rails, only lets through the specified form fieldset, dont let users mess with form format
  def country_params
    params.require(:country).permit( :name, :image)
  end


end
