class SecretController < ApplicationController
    def result
        @guess = params[:guess]
    end
end