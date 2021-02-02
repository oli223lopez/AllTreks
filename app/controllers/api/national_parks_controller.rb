class Api::NationalParksController < ApplicationController

    def index 
        @national_parks = NationalPark.all

        render :index
    end

    def show
        @national_park = NationalPark.find_by(id: params[:id])

        render :show
    end

end
