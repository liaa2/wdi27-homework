class NumbersController < ApplicationController
  def home
  end

  def results
    @guess = params[:number].to_i
    random = Random.new
    @random = random.rand(1..10)
    # raise "hell"
  end
end
