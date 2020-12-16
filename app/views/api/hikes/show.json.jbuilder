json.extract! @hike, :id, :name, :national_park_id, :hike_API_id

json.set! @hike.national_park do |nat_park|
    json.extract! nat_park, :id, :name
end
