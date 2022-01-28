json.extract! @project, :id, :project_name, :category, :current_funding, :goal_amount, :creator_id, :description, :deadline
json.photoUrl url_for(@project.photo)
json.creator @project.creator.name

json.project_rewards @project.rewards.each do |reward|
	json.extract! reward, :id, :tier_name, :price, :reward, :reward_description
end