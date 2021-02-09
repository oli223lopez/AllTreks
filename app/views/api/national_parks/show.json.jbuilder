json.extract! @national_park, :id, :name, :lat, :lon, :hikes, :photos

json.photos @national_park.photos do |photo|
    
    json.photoUrl url_for(photo.picture) if photo.picture.attached?
end
    
    
    
    







