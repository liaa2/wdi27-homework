class MurderersController < ApplicationController
    skip_before_action :verify_authenticity_token, raise: false
    
    # CREATE: new row entries
    def new
    end

    # CREATE: add row
    def create

        Murderer.create(
            first_name: params[:first_name],
            last_name: params[:last_name],
            age: params[:age],
            location: params[:location],
            victim_type: params[:victim_type],
            kill_method: params[:kill_method],
            kill_count: params[:kill_count],
            fate: params[:fate]
            )

            redirect_to( murderers_path )
        
    end

    # READ: index of all murderers
    def index
        @murderers = Murderer.all
    end

    # READ: show one murderer
    def show
        @murderer = Murderer.find(params[:id])
    end

    # EDIT: edit entry
    def edit
        @murderer = Murderer.find(params[:id])
    end

    def update
        murderer = Murderer.find(params[:id])

        murderer.update(
            first_name: params[:first_name],
            last_name: params[:last_name],
            age: params[:age],
            location: params[:location],
            victim_type: params[:victim_type],
            kill_method: params[:kill_method],
            kill_count: params[:kill_count],
            fate: params[:fate]
            )

            redirect_to murderers_path(murderer.id)
    end

    # DELETE:
    def destroy
        murderer = Murderer.find(params[:id])
        murderer.destroy

        redirect_to murderers_path
    end
end