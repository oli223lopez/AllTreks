# == Schema Information
#
# Table name: national_parks
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  lat        :float            not null
#  lon        :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class NationalPark < ApplicationRecord
    validates :name, :lat, :lon, presence: true 


    has_many :hikes,
        foreign_key: :national_park_id,
        class_name: :Hike


    has_many :photos,
        through: :hikes,
        source: :photos
    
end
