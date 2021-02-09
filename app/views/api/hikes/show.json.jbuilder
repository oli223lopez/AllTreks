json.extract! @hike, :id, :name, :national_park_id, :description, :summary, :difficulty,
:length, :route_type, :elevation_gain, :coordinates, :national_park, :photos 
json.photos @hike.photos do |photo|
    json.photoUrl url_for(photo.picture) if photo.picture.attached?
end