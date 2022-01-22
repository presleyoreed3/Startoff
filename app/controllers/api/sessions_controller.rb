class Api::SessionsController < ApplicationController

	def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user 
            login!(@user)
            render 'api/users/show.json.jbuilder'
        else
            render json: ["Invalid Username and Password"], status: 404
        end
    end

    def destroy
        if logout!
            render {}
        else
            flash.now[:errors] = ["404"]
        end
    end


end
