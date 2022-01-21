class UsersController < ApplicationController

	def index
		@users = User.all()
		render :index
	end

	# def create

	# end

	def show
		@user = User.find_by(username: params[:username])
		render :show
	end

	private

	def user_params
		params.require(:user).permit(:username, :password)
	end

end
