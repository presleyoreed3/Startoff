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
require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
