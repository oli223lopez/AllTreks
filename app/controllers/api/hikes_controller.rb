class Api::HikesController < ApplicationController

    def index
        @hikes = Hike.all
        render :index
    end

    def show 
        @hike = Hike.find_by(name: params[:id])
        render :show
    end
end
