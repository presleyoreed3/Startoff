class Api::ProjectsController < ApplicationController

	def index
		if params[:categoryName]
			@projects = Project.where(category: params[:categoryName])
			render :index
		else
			@projects = Project.all()
			render :index
		end
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

	def search
        query = params[:query]
        @projects = Project.where('project_name ILIKE ? OR description ILIKE ? OR category ILIKE ?', "%#{query}%", "%#{query}%", "%#{query}%")
        if @projects.length > 0
            render :index
        else
            render json: ["Sorry, we did not find any results for #{query}, try another search"], status: 404
        end
        
    end

	private
	def project_params
		params.require(:project).permit(:project_name, :current_funding, :creator_id, :description, :category, :goal_amount, :deadline, :photo)
	end
end
