class Api::RewardsController < ApplicationController

	def create
		@reward = Reward.new(reward_params)
		if @reward.save
			redirect_to api_project
		else
			render json: @reward.errors.full_messages, status: 422
		end
	end

	private

	def reward_params
		params.require(:reward).permit(:tier_name, :reward, :reward_description, :price, :project_id,)
	end

end
