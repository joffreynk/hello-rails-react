class GreetingsApiController < ApplicationController
  def index
    # GreetingsModel.order('RANDOM()').first
    render json: GreetingsModel.order('RANDOM()').first.to_json
  end
end
