json.extract! @project, :id, :project_name, :category, :current_funding, :goal_amount, :creator_id, :description
json.photoUrl url_for(@project.photo)