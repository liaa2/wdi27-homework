#plural
class SerialkillersController < ApplicationController

  skip_before_action :verify_authenticity_token, raise: false


  #CREATE 1: new form
  def new
  end


  #CREATE 2: form submits here
  def create
    Serialkiller.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
      image: params[:image],
      alive: params[:alive],
      victims: params[:victims]
    )
    redirect_to(serialkillers_path)
  end

    #READ: index
  def index
    @serialkillers = Serialkiller.all
  end

  def show
    @serialkiller = Serialkiller.find params[:id]
  end

  # UPDATE 1: Show pre-filled edit form
  def edit
    @serialkiller = Serialkiller.find params[:id]
  end

  #UPDATE 2:
  def update
    serialkiller = Serialkiller.find params[:id]
    serialkiller.update(
      first_name: params[:first_name],
      last_name: params[:last_name],
      image: params[:image],
      alive: params[:alive],
      victims: params[:victims]
    )

    redirect_to serialkiller_path(serialkiller.id)
  end


    #DESTROY
  def destroy
    serialkiller = Serialkiller.find params[:id]
    serialkiller.destroy

    redirect_to serialkillers_path
  end
end
