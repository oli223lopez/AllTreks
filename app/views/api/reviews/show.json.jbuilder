json.extract! @review, :id, :description, :rating, :hikes_id, :user_id


json.hike do 
    @review.hike do |hike|
        json.extract! hike, :id, :name
    end
end

json.user do 
    @review.user do |user|
        json.set! user.id do
            json.extract! user, :id, :username
        end
    end
end