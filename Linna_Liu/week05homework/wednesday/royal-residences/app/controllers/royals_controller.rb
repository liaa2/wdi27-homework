class RoyalsController < ApplicationController
  def new
    @royal = Royal.new
  end

  def create
  end

  def index
    @royals = Royal.all
  end

  def show
    @royal = Royal.find params[:id]
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
