class KillersController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false

  def new
  end

  def create
    Killer.create(
      name: params[:name],
      image: params[:image],
      country: params[:country],
      years_active_from: params[:years_active_from],
      years_active_to: params[:years_active_to],
      proven_victims: params[:proven_victims],
      notes: params[:notes]
    )

    redirect_to killers_path
  end

  def index
    @killers = Killer.all
  end

  def details
    @killer = Killer.find params[:id]
    @all_ids = Killer.all.ids
    next_killer_index = @all_ids.index(params[:id].to_i) + 1
    previous_killer_index = @all_ids.index(params[:id].to_i) - 1
    @previous_killer_id = @all_ids[previous_killer_index] if previous_killer_index >= 0
    @next_killer_id = @all_ids[next_killer_index]
    # @number = next_killer_id || 0
  end

  def edit
    @killer = Killer.find params[:id]
  end

  def update
    killer = Killer.find params[:id]
    killer.update(
      name: params[:name],
      image: params[:image],
      country: params[:country],
      years_active_from: params[:years_active_from],
      years_active_to: params[:years_active_to],
      proven_victims: params[:proven_victims],
      notes: params[:notes]
    )

    redirect_to killer_path
  end

  def delete
    killer = Killer.find params[:id]
    killer.destroy

    redirect_to killers_path
  end
end
