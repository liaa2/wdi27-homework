class BoxcatsController < ApplicationController

skip_before_action :verify_authenticity_token, raise: false
def new
end

def create

  Boxcat.create(
    name: params[:name],
    image: params[:image],
    box_volume: params[:box_volume],
    cat_size: params[:cat_size],
    cat_origin: params[:cat_origin],

  )

  redirect_to( boxcats_path )
end

def index
  @boxcats = Boxcat.all
end

def show
  @boxcat = Boxcat.find params[:id]
end

def edit
  @boxcat = Boxcat.find params[:id]
end

def update
  boxcat = Boxcat.find params[:id]
  boxcat.update(
    name: params[:name],
    image: params[:image],
    box_volume: params[:box_volume],
    cat_size: params[:cat_size],
    cat_origin: params[:cat_origin],
  )

redirect_to boxcat_path(boxcat.id)
end

def destroy
  boxcat = Boxcat.find params[:id]
  boxcat.destroy
  redirect_to( boxcats_path )
  # redirect_to("https://i.pinimg.com/originals/1b/b9/45/1bb9450f9d998bc6c2bbbb737052e029.jpg")

# def timer
#   sleep(2.0)
#   redirect_to( boxcats_path )
#
end


end
