class Api::ProjectsController < ApplicationController

	def index
		@projects = Project.all()
		render :index
	end

	def show
		@project = Project.find_by(id: params[:id])
		render :show
	end

	def create
		@project = Project.new(project_params)
		@project.current_funding = 0
		if @project.save!
			render :show
		else
			render json: @project.errors.full_messages, status: 422
		end
	end

	def update
		@project = Project.find_by(id: params[:project][:id])
		if @project.update(project_params)
			render :show
		else
			render json: @project.errors.full_messages, status: 422
		end
	end


	def destroy
		Project.find(params[:id]).destroy
	end

	private
	def project_params
		params.require(:project).permit(:project_name, :creator_id, :description, :category, :goal_amount, :deadline, :photo)
	end
end
