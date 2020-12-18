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
users =[
    User.create(username: 'teddy_roosevelt26', email: 'teddyroosevelt@test.com', password: 'password'),
    User.create(username: 'oli223lopez', email: 'oli@test.com', password: 'password'),
    User.create(username: 'julian', email: 'julian@test.com', password: 'password')

]
national_parks = [ NationalPark.create(name: 'Glacier_National_Park', lat: 48.7596, lon: 113.7870)]

glacier_hikes = [
Hike.create!(name: 'Grinnell_Glacier', national_park_id: national_parks[0].id, hike_API_id: 7018713, description: "Grinnell Glacier sees the highest number of visitors of any glacier in Glacier National Park. 
With abundant scenic views, great opportunities to see a variety of Glacier's megafauna, a mix of environments, and the most beautiful reward waiting at the end of the route, it's no surprise visitors are drawn to this hike.
That being said, the distance and effort needed to complete this route make for a full journey."),
Hike.create!(name: 'Highline_to_The_Loop', national_park_id: national_parks[0].id, hike_API_id: 7018707, description: "This breathtaking hike is easily accessible from Logan Pass and, paired with the park's free shuttle, can be quite busy, especially in the peak summer months. 
The majority of this route hugs the lower contours of the towering peaks of the Garden Wall, running above and parallel to the Going-to-the-Sun-Road.
With spectacular views of the valleys below and panoramic vistas of endless summits coupled with the park's free shuttle, this point to point outing is popular for a reason." ),
Hike.create!(name: 'Avalanche_Lake_via_Trail_of_the_Cedars', national_park_id: national_parks[0].id, hike_API_id: 7007669 ),
Hike.create!(name: 'Hidden_Lake_Overlook', national_park_id: national_parks[0].id, hike_API_id: 7018721, description: "This hike starts from the apex of the Going-to-the-Sun Road at Logan Pass. 
The entire hike features beautiful panoramic views out over alpine meadows and rugged peaks to a fantastic overlook of Hidden Lake tucked beneath towering peaks. 
The snow can stick around well into July, but the wildflowers are around through September with the best blooms in August."  ),
Hike.create!(name: 'Iceberg_Lake', national_park_id: national_parks[0].id, hike_API_id: 7018720, description: "This hike starts from the apex of the Going-to-the-Sun Road at Logan Pass. 
The entire hike features beautiful panoramic views out over alpine meadows and rugged peaks to a fantastic overlook of Hidden Lake tucked beneath towering peaks. 
The snow can stick around well into July, but the wildflowers are around through September with the best blooms in August." ),
Hike.create!(name: 'Gunsight_Pass', national_park_id: national_parks[0].id, hike_API_id: 7018737, description:"This incredible 20-mile hike from the Jackson Glacier Overlook to Lake McDonald Lodge will take you past mint green lakes, incredible vistas, and sheer rock walls roaring with waterfalls" ),
Hike.create!(name: 'Ptarmigan_Tunnel_Route', national_park_id: national_parks[0].id, hike_API_id: 7018722, description: "The 250-foot, constructed tunnel, known as Ptarmigan Tunnel, goes from one stunning view, through the sheer ridge of Ptarmigan Wall, to another stunning view on the other side." ),
Hike.create!(name: 'Many Glacier_Loop', national_park_id: national_parks[0].id, hike_API_id: 7055717, description: "A strenuous multi-day loop that utilizes the CDT and other notable trails in Glacier National Park. Includes difficult sections in several passes, but crosses lake-side campsites to permit for adequate rest." ),
Hike.create!(name: 'Grinnell_Lake', national_park_id: national_parks[0].id, hike_API_id: 7018753, description: "Following the same path and wonderful terrain as Lake Josephine Trail, the Grinnell Lake Trail starts at the Many Glacier Hotel and follows the south shorelines of Swiftcurrent Lake and Lake Josephine. 
Both of those lakes offer fantastic views of Grinnell Point and various other summits in the Many Glacier area as you dip in and out of lush forests to Grinnell Lake which is tucked beneath red cliffs and fed by a waterfall from the glacier above." ),
Hike.create!(name: 'BullHead_Lake', national_park_id: national_parks[0].id, hike_API_id: 7018728, description: "Head out on this beautiful route that, compared to others of the same distance, maintains a fairly level grade. 
This hike has many opportunities to see wildlife, especially moose, along a chain of lakes connected by creeks that sit below towering peaks.")
]


grinnell_glacier = [ 
    Review.create!(description:'Fun overall but pretty tough hike if you ask me. Bring plenty of water', rating:4, hikes_id:glacier_hikes[0].id, user_id:users[0].id),
    Review.create!(description:'My friend said that this was gonna be an easy hike. Come to find out that ', rating:4, hikes_id:glacier_hikes[0].id, user_id:users[0].id),
    Review.create!(description:'I dont hike very often because I live in the big city but when I do I love to come out to Montana and hike these beautiful trails. As for the comment above the hike wasnt that hard.', rating:4, hikes_id:glacier_hikes[0].id, user_id:users[0].id),

]
