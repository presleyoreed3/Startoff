json.projects do 
	@projects.each do |project|
		json.set! project.id do 
			json.(project, :id, :project_name, :description, :goal_amount, :current_funding, :creator_id, :deadline, :category)
			json.creator project.creator.name
			json.photoUrl url_for(project.photo)
	
			json.project_rewards project.rewards.each do |reward|
				json.extract! reward, :id, :tier_name, :price, :reward, :reward_description
			end
		end
	end
end

categories_hash = Hash.new {|h, k| h[k] = []}
@projects.each do |project|
	categories_hash[project.category].push(project.id)
end

json.category categories_hash