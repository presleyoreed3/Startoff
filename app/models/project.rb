# == Schema Information
#
# Table name: projects
#
#  id              :bigint           not null, primary key
#  project_name    :string           not null
#  creator_id      :integer          not null
#  description     :text             not null
#  category        :string           not null
#  current_funding :integer          not null
#  goal_amount     :integer          not null
#  deadline        :datetime         not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Project < ApplicationRecord

	validates :project_name, presence: true, uniqueness: true
	validates :description, presence: true
	validates :category, presence: true
	validates :goal_amount, presence: true
	validates :deadline, presence: true

	has_one_attached :photo

	belongs_to :creator,
		foreign_key: :creator_id,
		class_name: :User

	has_many :rewards,
		foreign_key: :project_id,
		class_name: :Reward
end
