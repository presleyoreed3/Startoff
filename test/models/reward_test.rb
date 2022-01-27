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
require 'test_helper'

class RewardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
