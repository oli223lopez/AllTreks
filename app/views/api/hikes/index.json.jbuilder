json.array!(@hikes) do |hike| 
    json.extract!(hike) :id, :name, :national_park_id, :hike_API_id
end