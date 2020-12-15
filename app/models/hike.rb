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
class Hike < ApplicationRecord
    validates :name, :hike_API_id, presence: true

    belongs_to :National_park,
        foreign_key: :national_park_id,
        class_name: :National_park



end






