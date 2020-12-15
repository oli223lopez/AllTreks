

json.extract! @national_park, :id, :name, :lat, :lon

json.set! @national_park.hikes do |hike|
    json.extract! hike, :id, :name
end


