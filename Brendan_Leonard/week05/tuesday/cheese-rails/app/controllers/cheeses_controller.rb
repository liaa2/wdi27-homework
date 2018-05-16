class CheesesController < ApplicationController

  skip_before_action :verify_authenticity_token, raise: false

  def new
  end

  def create
    Cheese.create(
      name: params[:name],
      varietal: params[:varietal],
      description: params[:description],
      firmness: params[:firmness],
      region: params[:region],
      milk: params[:milk],
      size: params[:size],
      unit_of_measure: params[:unit_of_measure],
      price: params[:price],
      image: params[:image]
    )

    redirect_to( cheeses_path )
  end

  def index
    @cheeses = Cheese.all
  end

  def show
    @cheese = Cheese.find params[:id]
  end

  def edit
    @cheese = Cheese.find params[:id]
  end

  def update
    cheese = Cheese.find params[:id]

    cheese.update(
      name: params[:name],
      varietal: params[:varietal],
      description: params[:description],
      firmness: params[:firmness],
      region: params[:region],
      milk: params[:milk],
      size: params[:size],
      unit_of_measure: params[:unit_of_measure],
      price: params[:price],
      image: params[:image]
    )

    redirect_to( cheeses_path )
  end

  def delete
    cheese = Cheese.find params[:id]
    cheese.delete

    redirect_to( cheeses_path )
  end
end