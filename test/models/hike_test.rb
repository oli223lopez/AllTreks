# == Schema Information
#
# Table name: hikes
#
#  id               :bigint           not null, primary key
#  name             :string           not null
#  national_park_id :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  description      :string
#  difficulty       :string
#  length           :integer
#  route_type       :string
#  elevation_gain   :integer
#  coordinates      :integer          default([]), is an Array
#  summary          :string
#
require 'test_helper'

class HikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
