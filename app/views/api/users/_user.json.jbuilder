json.extract! user, :id, :username, :email, :photos, :reviews

json.reviews user.reviews do |review|
    json.extract! review, :description, :rating, :hike 
end

json.photos user.photos do |photo|
    json.extract! photo, :hike
    json.photoUrl url_for(photo.picture) if photo.picture.attached?
end

