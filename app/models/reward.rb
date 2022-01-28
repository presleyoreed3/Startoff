# == Schema Information
#
# Table name: rewards
#
#  id                 :bigint           not null, primary key
#  project_id         :integer          not null
#  tier_name          :string           not null
#  price              :integer          not null
#  reward             :string           not null
#  reward_description :text             not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Reward < ApplicationRecord

	validates :tier_name, presence: true
	validates :price, presence: true
	validates :reward, presence: true
	validates :reward_description, presence: true

	belongs_to :project,
		foreign_key: :project_id,
		class_name: :Project

	
end
