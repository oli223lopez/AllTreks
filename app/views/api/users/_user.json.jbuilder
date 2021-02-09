json.extract! user, :id, :username, :email, :photos
json.photos user.photos do |photo|
    json.photoUrl url_for(photo.picture) if photo.picture.attached?
end

