class Api::ProjectsController < ApplicationController

	def index
		@projects = Project.all()
		render :index
	end

	def show

	end

	def create

	end

	def destroy

	end

	def update

	end

	private
	def project_params
		params.require(:project).permit(:project_name, :creator_id, :description, :category, :goal_amount, :deadline)
	end
end
