class Api::UsersController < ApplicationController

	def index
		@users = User.all()
		render :index
	end

	def create
		@user = User.new(user_params)
		if @user.save!
			login!(@user)
			render json: @user
		else
			flash[:errors] = @user.errors.full_messages
			render json: {}
		end
	end

	def show
		@user = User.find_by(id: params[:id])
		render :show
	end

	private

	def user_params
		params.require(:user).permit(:email, :password, :name)
	end

end
