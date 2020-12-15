class Api::HikesController < ApplicationController

    def index
        @hikes = Hike.all
        render :index
    end

    def show 
        @hike = Hike.find_vy(id: params[:id])
        render :show
    end
end
