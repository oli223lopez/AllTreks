json.extract! @hike, :id, :name, :national_park_id, :hike_API_id, :description

json.set! @hike.national_park do |nat_park|
    json.extract! nat_park, :id, :name
end

json.reviews do 
    @hike.reviews.each do |review|
        json.set! review.id do 
            json.extract! review, :id, :description, :rating, :user_id, :hikes_id
            review.user do |user|
                json.set! user.id do 
                    json.extract! review, :id, :username
                end
            end
        end
    end
end



