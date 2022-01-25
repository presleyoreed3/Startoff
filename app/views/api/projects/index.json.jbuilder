@projects.each do |project|
	json.set! project.id do 
		json.extract! project, :id, :project_name, :description, :goal_amount, :current_funding
	end
end