@projects.each do |project|
	json.set! project.id do 
		json.(project, :id, :project_name, :description, :goal_amount, :current_funding, :creator_id)
		json.creator project.creator.name
		json.photoUrl url_for(project.photo)
	end
end