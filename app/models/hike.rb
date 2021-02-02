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
class Hike < ApplicationRecord
    validates :name, presence: true

    belongs_to :national_park,
        foreign_key: :national_park_id,
        class_name: :NationalPark


    has_many :reviews,
        foreign_key: :hikes_id,
        class_name: :Review


end






