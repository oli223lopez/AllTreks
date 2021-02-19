json.extract! @national_park, :id, :name, :lat, :lon, :hikes, :photos

json.hikes @national_park.hikes do |hike|
    json.extract! hike, :id, :name, :difficulty, :length, :elevation_gain, :summary, :photos
    json.photos hike.photos do |photo| 
        json.photoUrl url_for(photo.picture) if photo.picture.attached?
    end
end

json.photos @national_park.photos do |photo| 
    json.extract! photo, :hike
    json.photoUrl url_for(photo.picture) if photo.picture.attached?
end


    
    
    
    







