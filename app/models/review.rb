# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  rating      :integer          not null
#  hikes_id    :integer
#  user_id     :integer
#
class Review < ApplicationRecord

    validates :description, presence: true
    validates :rating, presence: true
    validates :hikes_id, :user_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :hike,
        foreign_key: :hikes_id,
        class_name: :Hike


end
