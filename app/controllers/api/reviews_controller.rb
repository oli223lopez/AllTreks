class Api::ReviewsController < ApplicationController

    def create 
        @review = Review.new(review_params)

        if @review.save
            render :show
        else 
            render json: @review.errors.full_messages, status: 401
        end

    end

    def show 
        @review = @review.find_by(id: params[:id])

        render :show
    end

    def update 
         @review = Review.find_by(id: params[:id])

        if @review.edit(review_params)
            render :show
        else 
            render json: @review.errors.full_messages, status: 401
        end

    end

    def destroy 
        @review = Review.find_by(id: params[:id])
        @review.destroy
    end

    private

    def review_params 
        params.require(:review).permit(:description, :rating, :hikes_id, :user_id)
    end
end
