class RpsController < ApplicationController
    def outcome
        @move = params[:play]
        @computer = [
            "rock",
            "paper",
            "scissors"
        ]
    end
end