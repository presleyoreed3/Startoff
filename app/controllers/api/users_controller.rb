class Api::UsersController < ApplicationController

	def index
		@users = User.all()
		render :index
	end

	# def create

	# end

	def show
		@user = User.find_by(email: params[:email])
		render :show
	end

	private

	def user_params
		params.require(:user).permit(:email, :password)
	end

end
