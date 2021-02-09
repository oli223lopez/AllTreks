class Api::PhotosController < ApplicationController


    def create 
        @photo = Photo.new(photo_params)

        if @photo.save
            render  json: {message: "You did it"}
        else
            render json: @photo.errors.full_messages
        end
    end


    def destroy 
        @photo = Photo.find_by(id: params[:id])
        @photo.destroy
    end




    private 

    def photo_params
        params.require(:photo).permit(:hike_id, :user_id, :picture)
    end

end
