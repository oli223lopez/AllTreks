class Photo < ApplicationRecord
    validates :hike_id, :user_id, presence: true

    has_one_attached :picture

    belongs_to :hike,
        foreign_key: :hike_id,
        class_name: :Hike

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
        
end
