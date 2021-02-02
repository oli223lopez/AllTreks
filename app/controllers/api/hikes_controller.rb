class Api::HikesController < ApplicationController

    def index
        @hikes = Hike.all
        render :index
    end

    def show 
        @hike = Hike.find_by(id: params[:id])
        render :show
    end
end
