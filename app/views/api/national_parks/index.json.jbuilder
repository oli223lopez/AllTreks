@national_parks.each do |national_park|

    json.set! national_park.id do 
        json.extract! national_park, :id, :name, :lat, :lon
        json.set! 'hikes' do
            json.array! national_park.hikes, :id, :name
        end
    end


end