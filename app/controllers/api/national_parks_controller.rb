class Api::NationalParksController < ApplicationController


    def show
        @national_park = NationalPark.find_by(name: params[:id])

        render :show
    end

end
