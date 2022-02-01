class Api::RewardsController < ApplicationController

	def show
		@reward = Reward.find_by(id: params[:id])
		render :show

	end

	def create
		@reward = Reward.new(reward_params)
		if @reward.save
			render :show
		else
			render json: @reward.errors.full_messages, status: 422
		end
	end

	def update
		@reward = Reward.find_by(id: params[:id])
		if @reward.update(reward_params)
			render :show
		else
			render json: @reward.errors.full_messages, status: 422
		end
	end

	private

	def reward_params
		params.require(:reward).permit(:tier_name, :reward, :reward_description, :price, :project_id,)
	end

end
