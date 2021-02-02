

json.extract! @national_park, :id, :name, :lat, :lon, :hikes do |hike|
    json.extract! hike, :id, :name, :summary, :difficulty, :length, :route_type, :elevation_gain
end




