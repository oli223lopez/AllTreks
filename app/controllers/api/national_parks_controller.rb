class Api::NationalParksController < ApplicationController


    def show
        @national_park = NationalPark.find_by(id: params[:id])

        render :show
    end

end
