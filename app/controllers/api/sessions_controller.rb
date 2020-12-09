class Api::SessionsController < ApplicationController


     before_action :require_logged_in, only: [:destroy]

    def create 
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user
            login(@user)
            render `/api/user/#{user.id}`
        else
          
        end
    end


    def delete 
        logout
        render '/'
    end


end
