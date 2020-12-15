# == Schema Information
#
# Table name: hikes
#
#  id               :bigint           not null, primary key
#  name             :string           not null
#  national_park_id :integer
#  hike_API_id      :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
require 'test_helper'

class HikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
