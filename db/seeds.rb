# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
NationalPark.destroy_all
Hike.destroy_all

User.create(username: 'teddy_roosevelt26', email: 'teddyroosevelt@test.com', password: 'password')
national_parks = [ NationalPark.create(name: 'Glacier_National_Park', lat: 48.7596, lon: 113.7870)]

glacier_hikes = [
Hike.create!(name: 'Grinnell_Glacier', national_park_id: national_parks[0].id, hike_API_id: 7018713),
Hike.create!(name: 'Highline_to_The_Loop', national_park_id: national_parks[0].id, hike_API_id: 7018707),
Hike.create!(name: 'Avalanche_Lake_via_Trail_of_the_Cedars', national_park_id: national_parks[0].id, hike_API_id: 7007669 ),
Hike.create!(name: 'Hidden_Lake_Overlook', national_park_id: national_parks[0].id, hike_API_id: 7018721 ),
Hike.create!(name: 'Iceberg_Lake', national_park_id: national_parks[0].id, hike_API_id: 7018720 ),
Hike.create!(name: 'Gunsight_Pass', national_park_id: national_parks[0].id, hike_API_id: 7018737 ),
Hike.create!(name: 'Ptarmigan_Tunnel_Route', national_park_id: national_parks[0].id, hike_API_id: 7018722 ),
Hike.create!(name: 'Many Glacier_Loop', national_park_id: national_parks[0].id, hike_API_id: 7055717 ),
Hike.create!(name: 'Grinnell_Lake', national_park_id: national_parks[0].id, hike_API_id: 7018753 ),
Hike.create!(name: 'BullHead_Lake', national_park_id: national_parks[0].id, hike_API_id: 7018728 )
]

