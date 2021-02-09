# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'

User.destroy_all
NationalPark.destroy_all
Hike.destroy_all
users =[
    User.create(username: 'teddy_roosevelt26', email: 'teddyroosevelt@test.com', password: 'password'),
    User.create(username: 'oli223lopez', email: 'oli@test.com', password: 'password'),
    User.create(username: 'julian', email: 'julian@test.com', password: 'password'),
    User.create(username: 'Plex', email: 'alex@perrone.com', password: 'password'),
    User.create(username: 'Behn', email: 'brendan@dehn.com', password: 'password'),
    User.create(username: 'Frenchman', email:'jon@french.com', password: 'password')
]
national_parks = [ NationalPark.create(name: 'Glacier National Park', lat: 48.7596, lon: 113.7870)]


grinnelle_Glacier = Hike.create!(name: 'Grinnell Glacier', national_park_id: national_parks[0].id, difficulty: 'Hard' , length: 11.2 , route_type: 'Out & Back', elevation_gain: 2181, coordinates: [{lat: 48.79279, lon: -113.66872}, 
{lat: 48.77297558262199, lon: -113.70672747696791 }, 
{lat: 48.7600035, lon: -113.7300751}], summary:'Grinnell Glacier Trail [CLOSED] is a 11.2 mile heavily trafficked out and back trail located near Babb, Montana that features a lake and is rated as difficult. The trail is primarily used for hiking and is best used from June until October.',
 description: "Access the start of this route from the Grinnell Glacier Trailhead parking area, west of Swiftcurrent Lake.

Start out on the first two level miles along Swiftcurrent Lake and Lake Josephine's eastern and northern shores on the appropriately named North Shore Lake Josephine Trail. Towards the end of Lake Josephine, look for the right-hand turn onto the Grinnell Glacier Trail. This is where the elevation begins to increase for the next two or so miles.

As you climb up the flanks of Mt. Grinnell, the views keep getting better. From these higher vantage points, there's an increased chance of seeing wildlife in the surrounding meadows and down into the drainages below.

The tall cliffs of Angel Wing rise abruptly to the south while you can begin to see Grinnell Lake's incredible emerald color. This almost artificial hue is due to very small particles of rock that have been ground down by glaciers, that are suspended in the water of the lake. These particles are called glacial flour. You'll notice the higher up the hike goes, the more vivid the color of the water becomes.

As the trail begins to level out, just below the glacier, there is a nice picnic and sitting area and a pit toilet. Please be sure to pack out any trash. Continue for the last climb up 0.34 miles through the rock until you arrive at Upper Grinnell Lake with Grinnell Glacier to your left. Straight ahead, Salamander Glacier hugs the cliffs of the Garden Wall.

The Continental Divide runs along the top of the Garden Wall and Going-to-the-Sun Road is just on the other side.

This content was created by Jake Bramante of Hike 734. Visit hike734.com for more expert Glacier content and maps that help you decide which trail to hike.")

grinnelle_Glacier_Photos = [
    Photo.create!(hike_id: grinnelle_Glacier.id, user_id: users[4].id),
    Photo.create!(hike_id: grinnelle_Glacier.id, user_id: users[4].id),
    Photo.create!(hike_id: grinnelle_Glacier.id, user_id: users[4].id),
    Photo.create!(hike_id: grinnelle_Glacier.id, user_id: users[4].id)

]
gg1 = open('https://alltreks-seeds.s3.amazonaws.com/grinnelle_glacier!.jpg')
gg2 = open('https://alltreks-seeds.s3.amazonaws.com/grinnelle_glacier2.jpg')
gg3 = open('https://alltreks-seeds.s3.amazonaws.com/grinnelle_glacier3.JPG')
gg4 = open('https://alltreks-seeds.s3.amazonaws.com/grinnelle_glacier4.jpg')
grinnelle_Glacier_Photos[0].picture.attach(io: gg1, filename:'grinnelle_glacier1.jpg')
grinnelle_Glacier_Photos[1].picture.attach(io: gg2, filename: 'grinnelle_glacier2.jpg')
grinnelle_Glacier_Photos[2].picture.attach(io: gg3, filename:'grinnelle_glacier3.jpg')
grinnelle_Glacier_Photos[3].picture.attach(io: gg4, filename:'grinnelle_glacier4.jpg')



highline_trail = Hike.create!(name: 'Highline Trail: Logan Pass to Granite Park Chalet', national_park_id: national_parks[0].id, difficulty: 'Hard', length: 14.9, route_type: "Out & Back", elevation_gain: 2578, coordinates: [{lat: 48.696920, lon: -113.718249}, 
{lat: 48.745497, lon: -113.742094}, 
{lat: 48.770844, lon: -113.772113 }], summary:'Highline Trail: Logan Pass to Granite Park Chalet is a 14.9 mile heavily trafficked out and back trail located near Siyeh Bend, Montana that features a river and is rated as difficult. 
The trail is primarily used for hiking, camping, and backpacking and is best used from June until October.' , 
description: "The High-Line trail runs from the Logan Pass Visitors Center to The Loop Trail Head along the Garden Wall. 
The first 7.6 miles of the trail in easy with gradual elevation climb. After Granite Park Chalet the trail drops 2,200 feet in 4 miles to the Loop Trail Head. 
Expect heavy traffic and be early if you plan to park at the visitors center. The trail in very narrow in some places with steep drop offs.

There are three other trails that joint the Highland at Granite Park Chalet allowing of alternative hiking options." )

highline_trail_photos = [
    Photo.create!(hike_id: highline_trail.id, user_id: users[5].id),
    Photo.create!(hike_id: highline_trail.id, user_id: users[5].id),
    Photo.create!(hike_id: highline_trail.id, user_id: users[5].id),
    Photo.create!(hike_id: highline_trail.id, user_id: users[5].id)

]
ht1 = open('https://alltreks-seeds.s3.amazonaws.com/highline_trail.jpg')
ht2 = open('https://alltreks-seeds.s3.amazonaws.com/highline_trail1.jpg')
ht3 = open('https://alltreks-seeds.s3.amazonaws.com/highline_trail2.jpg')
ht4 = open('https://alltreks-seeds.s3.amazonaws.com/highline_trail3.jpg')
highline_trail_photos[0].picture.attach(io: ht1, filename:'highline_trail1.jpg')
highline_trail_photos[1].picture.attach(io: ht2, filename: 'highline_trail2.jpg')
highline_trail_photos[2].picture.attach(io: ht3, filename:'highline_trail3.jpg')
highline_trail_photos[3].picture.attach(io: ht4, filename:'highline_trail4.jpg')

avalanche_lake = Hike.create!(name: 'Avalanche Lake via Trail of the Cedars', national_park_id: national_parks[0].id, difficulty: "Moderate", length: 6.7, route_type: "Out & Back", elevation_gain: 757, coordinates: [{lat: 48.68008, lon: -113.81914}, 
{lat: 48.668690, lon: -113.800368}, 
{lat: 48.651190, lon: -113.784558}], summary:"Avalanche Lake is the perfect blend of accessibility, enjoyable hiking and scenic payoff. You know from the start that you're in for an experience that's worth the sweat. 
It's a great one for families with smooth trail, steady inclines and lots of fun stops along the way from hollowed out trees struck by lightning to avalanche clearings blasted through the forest.

Most of the trail is shaded and cool, growing warmer and more open as you reach the lake, where rock beaches and stunning views of distant waterfalls await. This is a snapshot destined for the mantel.", 
description: "From the car or shuttle bus stop, stroll along the majestic Trail of the Cedars or warm up the legs with a short climb aside the pounding waters and carved walls of Avalanche Gorge. 
At the crowded and well-marked trailhead, begin immediately heading uphill alongside the sounds of glacial runoff. 
You'll follow the creek that cuts through a deep canyon below, so enjoy the awesome views of deep pools and rushing waterfalls.

The trail steepens for a short period here as you leave the lower section behind and enter the main portion of the trail; a double-wide path that winds gradually uphill under the forest canopy for the bulk of the journey. 
As you near the top, the canopy gives way revealing the open sky above and high mountain peaks just ahead. The trail narrows for a section of short singletrack flanked on both sides by thick brush. 
Soon thereafter, the brush lessens and the trail reaches it's official terminus at Avalanche Lake where the view turns from beautiful to magnificent.

Relax on the rocky beach enjoying the views of the surrounding mountains as they soar thousands of feet above the lake. Additional options include making your way along the shoreline for a secret picnic or fly-fishing spot, or taking the opt")

avalanche_lake_photos = [
    Photo.create!(hike_id: avalanche_lake.id, user_id: users[1].id),
    Photo.create!(hike_id: avalanche_lake.id, user_id: users[1].id),
    Photo.create!(hike_id: avalanche_lake.id, user_id: users[1].id),
    Photo.create!(hike_id: avalanche_lake.id, user_id: users[1].id)

]
al1 = open('https://alltreks-seeds.s3.amazonaws.com/avalanche_lake1.png')
al2 = open('https://alltreks-seeds.s3.amazonaws.com/avalanche_lake2.jpg')
al3 = open('https://alltreks-seeds.s3.amazonaws.com/avalanche_lake3.jpg')
al4 = open('https://alltreks-seeds.s3.amazonaws.com/avalanche_lake4.jpg')
avalanche_lake_photos[0].picture.attach(io: al1, filename:'avalanche_lake1.jpg')
avalanche_lake_photos[1].picture.attach(io: al2, filename: 'avalanche_lake2.jpg')
avalanche_lake_photos[2].picture.attach(io: al3, filename:'avalanche_lake3.jpg')
avalanche_lake_photos[3].picture.attach(io: al4, filename:'avalanche_lake4.jpg')

hidden_lake = Hike.create!(name: 'Hidden Lake Overlook', national_park_id: national_parks[0].id, difficulty: "Easy", length: 2.9, route_type: "Out & Back", elevation_gain: 567, coordinates: [{lat: 48.695481, lon: -113.717767}, 
{lat: 48.692990, lon: -113.728133 }, 
{lat: 48.687311, lon: -113.741492 }], summary:"This hike starts from the apex of the Going-to-the-Sun Road at Logan Pass. The entire hike features beautiful panoramic views out over alpine meadows and rugged peaks to a fantastic overlook of Hidden Lake tucked beneath towering peaks. 
The snow can stick around well into July, but the wildflowers are around through September with the best blooms in August." , 
description: "To start this hike, head out on the Hidden Lake Trail past the visitor center that starts as asphalt and quickly turns into a raised boardwalk. The boardwalk heads up turning into stairs that lead toward the glacial moraine that was formed by the glacier that used to sit at the bottom of Clements Mountain. Note that the boardwalk is a series of many steps. They aren't difficult in and of themselves, but were not built at a height to be a simple step for someone shorter than 64 inches. It helps to have a hiking pole or walking stick to be able to navigate the step height.

From here, the trail continues on dirt, climbing over Hidden Pass where you can often spot mountain goats. After 1.4 miles, Hidden Lake becomes visible down below at overlook with an interpretive sign. From here, there is also a great view into Sperry Glacier basin.

Most visitors head back from this overlook, but the trail does continue downward for an additional 1.2 miles to the north side of Hidden Lake. This is a steep descent that can be a challenging addition..")
hidden_lake_photos = [
    Photo.create!(hike_id: hidden_lake.id, user_id: users[3].id),
    Photo.create!(hike_id: hidden_lake.id, user_id: users[3].id),
    Photo.create!(hike_id: hidden_lake.id, user_id: users[3].id),
    Photo.create!(hike_id: hidden_lake.id, user_id: users[3].id)

]
hl1 = open('https://alltreks-seeds.s3.amazonaws.com/hidden_lake1.jpg')
hl2 = open('https://alltreks-seeds.s3.amazonaws.com/hidden_lake2.jpg')
hl3 = open('https://alltreks-seeds.s3.amazonaws.com/hidden_lake3.jpg')
hl4 = open('https://alltreks-seeds.s3.amazonaws.com/hidden_lake4.jpg')
hidden_lake_photos[0].picture.attach(io: hl1, filename:'hidden_lake1.jpg')
hidden_lake_photos[1].picture.attach(io: hl2, filename: 'hidden_lake2.jpg')
hidden_lake_photos[2].picture.attach(io: hl3, filename:'hidden_lake3.jpg')
hidden_lake_photos[3].picture.attach(io: hl4, filename:'hidden_lake4.jpg')

iceberg_lake = Hike.create!(name: 'Iceberg Lake', national_park_id: national_parks[0].id, difficulty: "Moderate", length: 9.3, route_type: "Out & Back", elevation_gain: 1450, coordinates: [{lat: 48.799922, lon: -113.678465}, 
{lat: 48.827520, lon: -113.721428}, 
{lat: 48.815588, lon: -113.742178}], 
summary: "With icebergs drifting on an emerald lake surrounded by cliffs rising more than 2,000 feet above the water, this hike is a visitor favorite for a very good reason.", 
description: "To access this route, take the Many Glacier Road to the Swiftcurrent Motor Inn parking area. Turn right just after the inn and follow the road to the Iceberg Lake/Ptarmigan Tunnel trailhead. 
(Parking at the trailhead is limited, so you may have to park at the Swiftcurrent Motor Inn parking lot and follow the road to the trailhead on foot).

Although the first two-tenths of a mile climb at a fairly steep grade, the trail quickly flattens out, becoming a nice, gradual incline taking you to broad meadows. 
Keep an eye on the meadows along the slopes above and below the trail, as this area is frequented by bighorn sheep and grizzlies. Occasionally you can see mountain goats in the rockier cliffs higher up.

The trail heads into the forest with scattered views as you go by Ptarmigan Falls at mile 2.6, which you can see through the vegetation. Beyond the waterfall, continue past the Ptarmigan Tunnel Trail which breaks off to the right, to the Iceberg Lake Trail.

From here, the trail eventually breaks out of the trees and heads through avalanche chutes and meadows. Wilbur Creek creates a waterfall at the head of the drainage and flows below the trail. As you head into the basin, you pass a beautiful small pond surrounded by flowering meadows in early to mid-summer. 
Continue on over the rise. As you drop towards the towering rock walls, Iceberg Lake becomes visible. In the cooler, earlier months much of the lake is frozen, with scattered icebergs throughout.

As summer months begin to get warmer, the icebergs will separate and float freely on the top of the water. During rare years with higher-than-normal temperatures, the icebergs can become completely melted.

From Iceberg Lake, head back the way you came to your vehicle." )
iceberg_lake_photos = [
    Photo.create!(hike_id: iceberg_lake.id, user_id: users[1].id),
    Photo.create!(hike_id: iceberg_lake.id, user_id: users[2].id),
    Photo.create!(hike_id: iceberg_lake.id, user_id: users[3].id),
    Photo.create!(hike_id: iceberg_lake.id, user_id: users[4].id)

]
il1 = open('https://alltreks-seeds.s3.amazonaws.com/iceberg_lake1.png')
il2 = open('https://alltreks-seeds.s3.amazonaws.com/iceberg_lake2.png')
il3 = open('https://alltreks-seeds.s3.amazonaws.com/iceberg_lake3.jpg')
il4 = open('https://alltreks-seeds.s3.amazonaws.com/iceberg_lake4.png')
iceberg_lake_photos[0].picture.attach(io: il1, filename:'iceberg_lake1.jpg')
iceberg_lake_photos[1].picture.attach(io: il2, filename: 'iceberg_lake2.jpg')
iceberg_lake_photos[2].picture.attach(io: il3, filename:'iceberg_lake3.jpg')
iceberg_lake_photos[3].picture.attach(io: il4, filename:'iceberg_lake4.jpg')

gunsight_pass = Hike.create!(name: 'Gunsight Pass Trail', national_park_id: national_parks[0].id, difficulty: "Hard", length: 18.8, route_type: "Out & Back", elevation_gain: 3727, coordinates: [{lat: 48.6775, lon: -113.6521}, 
{lat: 48.611126, lon: -113.736578}, 
{lat: 48.617756, lon: -113.878574}], 
summary: "Gunsight Pass Trail is a 18.8 mile moderately trafficked point-to-point trail located near East Glacier Park Village, Montana that features a lake and is only recommended for very experienced adventurers. 
The trail offers a number of activity options and is best used from March until October.", 
description:"
The Gunsight Pass Trail takes off from the Piegan Pass Trail where it roughly parallels the St. Mary River. 
The trail breaks from the trees at the scenic Mirror Pond then continues back in the trees, passing the junction with Florence Falls at mile 4.3.

From here, the trail begins to gain some elevation. The higher the trail climbs, the better the views of the peaks around you become. 
Continue for around 2.2 miles from the Florence Falls Trail, reaching the incredible shore of Gunsight Lake at the Gunsight Lake Campground. 
This is a great spot to take a break for lunch looking up to Gunsight Pass and the huge walls surrounding the lake.

At Gunsight Lake’s outlet, the trail crosses a wooden bridge and continues to the right ( Jackson Glacier Trail heads to the left). The trail begins to switchback up Mt. 
Jackson’s north face as the terrain begins to shift from dense vegetation to rockier, scree slopes. Be on the lookout for mountain goats and other alpine mammals like marmots in this rockier terrain.

The views of the emerald-colored Gunsight Lake get more incredible. The lake's color is due to the suspended particles of rock that were ground down by shifting glaciers. 
Across the lake, the south side of Gunsight Mountain features numerous cascades that plummet down its face. 
Be prepared for late-season snow crossings that require necessary gear such as an ice ax and crampons as you get closer to the shelter cabin at Gunsight Pass.

Coming to the top of Gunsight Pass, you'll get your first views of Lake Ellen Wilson and beyond into the west side of the park. 
From here, drop down the rocky slopes to a creek crossing at the base of a waterfall that can be flowing strongly, depending on the snowpack and time of year. 
The trail then bends around the north side of the lake and begins to climb for the final push towards Lincoln Pass. This area has frequent mountain goats that can be aggressive.

From Lincoln Pass, head down along the switchbacks for close to a mile until you reach the historic Sperry Chalet. This is another great spot to take a break before.

After Sperry Chalet, the trail heads down for another six miles or so in the trees first paralleling Sprague Creek, then crossing over the ridge to Snyder Creek. 
It crosses Snyder Creek and then follows it down to Lake McDonald Lodge." )

gunsight_pass_photos = [
    Photo.create!(hike_id: gunsight_pass.id, user_id: users[5].id),
    Photo.create!(hike_id: gunsight_pass.id, user_id: users[3].id),
    Photo.create!(hike_id: gunsight_pass.id, user_id: users[1].id),
    Photo.create!(hike_id: gunsight_pass.id, user_id: users[2].id)

]
gp1 = open('https://alltreks-seeds.s3.amazonaws.com/gunsight_pass1.jpg')
gp2 = open('https://alltreks-seeds.s3.amazonaws.com/gunsight_pass2.jpg')
gp3 = open('https://alltreks-seeds.s3.amazonaws.com/gunsight_pass3.jpg')
gp4 = open('https://alltreks-seeds.s3.amazonaws.com/gunsight_pass4.jpg')
gunsight_pass_photos[0].picture.attach(io: gp1, filename:'gunsight_pass1.jpg')
gunsight_pass_photos[1].picture.attach(io: gp2, filename: 'gunsight_pass2.jpg')
gunsight_pass_photos[2].picture.attach(io: gp3, filename:'gunsight_pass3.jpg')
gunsight_pass_photos[3].picture.attach(io: gp4, filename:'gunsight_pass4.jpg')

ptarmigan_tunnel = Hike.create!(name: 'Ptarmigan Tunnel Route', national_park_id: national_parks[0].id, difficulty: "Hard", length: 10.9, route_type: "Out & Back", elevation_gain: 2283, coordinates: [{lat: 48.799922, lon: -113.678465}, 
{lat: 48.822113, lon: -113.712883}, 
{lat: 48.849661, lon: -113.707675}], 
summary: "The 250-foot, constructed tunnel, known as Ptarmigan Tunnel, goes from one stunning view, through the sheer ridge of Ptarmigan Wall, to another stunning view on the other side.", 
description: "The Ptarmigan Trail shares a trailhead as well as its first 2.7 miles with the Iceberg Lake Trail (both can be paired for a longer day). 
Although the first two-tenths of a mile climb at a fairly steep grade, the trail quickly flattens out, becoming a nice, gradual incline taking you to broad meadows. 
Keep an eye on the meadows along the slopes above and below the trail, as this area is frequented by bighorn sheep and grizzlies. 
Occasionally, you can see mountain goats in the rockier cliffs higher up.

The trail heads into the forest with scattered views as you go by Ptarmigan Falls at mile 2.6, which you can see through the vegetation. 
The Iceberg Lake Trail splits off just after Ptarmigan Falls. The trail continues and gets steep once again. Huckleberries are plentiful here, and black bears are not uncommon, so be prepared. 
At a little over 1.6 miles from the junction, you'll reach Ptarmigan Lake. You'll see the two switchbacks up on the slope to the tunnel. There is definitely more than a little work ahead of you, but once you reach the tunnel it will all be worth it.

The views looking back down the drainage over the lake are fantastic. The views on the other side of the tunnel are even more breathtaking. 
The trail on the other side was hewn from the red rocks and offers staggering views onto Elizabeth Lake and the Belly River drainage. 
It’s time to turn around, enjoy the views looking into Many Glacier, and drop back down to your vehicle." )

ptarmigan_tunnel_photo = [
    Photo.create!(hike_id: ptarmigan_tunnel.id, user_id: users[5].id),
    Photo.create!(hike_id: ptarmigan_tunnel.id, user_id: users[3].id),
    Photo.create!(hike_id: ptarmigan_tunnel.id, user_id: users[1].id),
    Photo.create!(hike_id: ptarmigan_tunnel.id, user_id: users[2].id)
]
pt1 = open('https://alltreks-seeds.s3.amazonaws.com/ptarmigan_tunnel1.jpg')
pt2 = open('https://alltreks-seeds.s3.amazonaws.com/ptarmigan_tunnel2.jpg')
pt3 = open('https://alltreks-seeds.s3.amazonaws.com/ptarmigan_tunnel3.jpg')
pt4 = open('https://alltreks-seeds.s3.amazonaws.com/ptarmigan_tunnel4.jpg')
ptarmigan_tunnel_photo[0].picture.attach(io: pt1, filename:'ptarmigan_tunnel1.jpg')
ptarmigan_tunnel_photo[1].picture.attach(io: pt2, filename: 'ptarmigan_tunnel2.jpg')
ptarmigan_tunnel_photo[2].picture.attach(io: pt3, filename:'ptarmigan_tunnel3.jpg')
ptarmigan_tunnel_photo[3].picture.attach(io: pt4, filename:'ptarmigan_tunnel4.jpg')

many_glacier = Hike.create!(name: 'Many Glacier Loop', national_park_id: national_parks[0].id, difficulty: "Hard", length: 61.9, route_type: "Loop", elevation_gain: 11232, coordinates: [{lat: 48.799922, lon: -113.678465}, 
{lat: 48.819354, lon: -113.773815},
{lat: 48.898031, lon: -113.904909}, 
{lat: 48.911527, lon: -113.723326},
{lat: 48.851713, lon: -113.605119},
{lat: 48.821359, lon: -113.609962}], 
summary:"A strenuous multi-day loop that utilizes the CDT and other notable trails in Glacier National Park. Includes difficult sections in several passes, but crosses lake-side campsites to permit for adequate rest.", 
description: "This is a multi-day loop (or a long run). The trails can be considerably difficult to navigate outside of July-September, so crampons/microspikes and an ice ax are recommended.

This hike begins at Iceberg Lake Trailhead near the Many Glacier Hotel parking lot. It continues east along Swiftcurrent Pass along a steep incline, towards Granite Park Campsite. 
Swiftcurrent Pass experiences heavy snowfall, and can be difficult to navigate throughout the off-season. The recommended overnight stay at Granite Park Campsite.

Turn north along the CDT towards Fifty Mountain Campsite, with moderate elevation gain and considerable snow hazards. 
Here you'll find relatively rough and rocky terrain, and consistent climbs. The recommended overnight is at Fifty Mountain Campsite, which has beautiful views.

Continue north along the CDT to make a sharp right turn towards Stoney Indian Pass. Continue through the pass, which includes a river crossing that can be difficult in spring months and after periods of heavy rainfall. 
The second river crossing is only bridged during the on-season. Spend the night at Mokowanis Junction Campsite.

Continue northeast, then join the CDT alternate route after Cosley Lake Cutoff, and an additional river crossing. 
Continue south to Elizabeth Lake Head Campsite, which is a serene and quiet site with beautiful lake views, before continuing on to Red Gap Pass.

Follow the CDT alternate trail south through Red Gap Pass, which is easily one of the most scenic views in the entire park. 
Here you'll see moderate elevation gain and snow hazards even in off-season. Camp overnight at Poia Lake.

Complete the loop by following RT-17 after Poia Lake Trail back to Many Glacier Hotel parking lot." )
many_glacier_photo = [
    Photo.create!(hike_id: many_glacier.id, user_id: users[3].id),
    Photo.create!(hike_id: many_glacier.id, user_id: users[4].id),
    Photo.create!(hike_id: many_glacier.id, user_id: users[5].id),
    Photo.create!(hike_id: many_glacier.id, user_id: users[1].id)
]
mg1 = open('https://alltreks-seeds.s3.amazonaws.com/many_glacier1.jpg')
mg2 = open('https://alltreks-seeds.s3.amazonaws.com/many_glacier2.jpg')
mg3 = open('https://alltreks-seeds.s3.amazonaws.com/many_glacier3.jpg')
mg4 = open('https://alltreks-seeds.s3.amazonaws.com/many_glacier4.jpg')
many_glacier_photo[0].picture.attach(io: mg1, filename:'many_glacier1.jpg')
many_glacier_photo[1].picture.attach(io: mg2, filename: 'many_glacier2.jpg')
many_glacier_photo[2].picture.attach(io: mg3, filename:'many_glacier3.jpg')
many_glacier_photo[3].picture.attach(io: mg4, filename:'many_glacier4.jpg')

grinnell_lake = Hike.create!(name: 'Grinnell Lake', national_park_id: national_parks[0].id, difficulty: "Easy", length: 7.1, route_type: "Out & Back", elevation_gain: 351, coordinates: [{lat: 48.795971, lon: -113.657241}, 
{lat: 48.778570, lon: -113.672284}, 
{lat: 48.764979, lon: -113.700516}], 
summary:" Grinnell Lake Trail starts at the Many Glacier Hotel and follows the south shorelines of Swiftcurrent Lake and Lake Josephine. 
Both of those lakes offer fantastic views of Grinnell Point and various other summits in the Many Glacier area as you dip in and out of lush forests to Grinnell Lake which is tucked beneath red cliffs and fed by a waterfall from the glacier above.", 
description: "To access this hike, head into the Many Glacier area and take a left over the Swiftcurrent Creek bridge. Continue toward the historic Many Glacier Hotel and park in the lot. Head down to the shores of Swiftcurrent Lake by the hotel. 
Follow the shoreline south until you get to the trailhead.

Go along the shores of Swiftcurrent Lake and stay on the east side of the creek instead of taking the bridge as the trail transitions onto the Swiftcurrent Cutoff Trail. 
It then merges onto the South Shore Lake Josephine Trail passing Stump Lake, then a really beautiful look at the foot of Lake Josephine. At around mile 2.5, just past the boat dock, you'll come to the end of Lake Josephine. 
Continue past the trail junction where Josephine Walk wraps around the head of the lake into the forest.

Once past Lake Josephine, follow Cataract Creek upstream for just under a mile. Look for a spur trail off to the left to see Hidden Falls, which is a waterfall tucked in among the rocks.

Once back on the trail, cross the swinging bridge over Cataract Creek and continue southwest for another quarter mile to the shores of Grinnell Lake. 
The lake sits tucked beneath the base of Mt. Gould, Angel Wing, and Grinnell Mountain with Grinnell Falls cascading from the Grinnell and Salamander Glaciers.

To return, head back the way you came or take the Josephine Walk on the north side of Lake Josephine and follow the Swiftcurrent Lake Trail around the lake in either direction. 
This route is a fairly level stroll." )

grinnell_lake_photo = [
    Photo.create!(hike_id: grinnell_lake.id, user_id: users[3].id),
    Photo.create!(hike_id: grinnell_lake.id, user_id: users[4].id),
    Photo.create!(hike_id: grinnell_lake.id, user_id: users[5].id),
    Photo.create!(hike_id: grinnell_lake.id, user_id: users[1].id)
]
gl1 = open('https://alltreks-seeds.s3.amazonaws.com/grinnell_lake1.jpg')
gl2 = open('https://alltreks-seeds.s3.amazonaws.com/grinnell_lake2.jpg')
gl3 = open('https://alltreks-seeds.s3.amazonaws.com/grinnell_lake3.jpg')
gl4 = open('https://alltreks-seeds.s3.amazonaws.com/grinnell_lake4.jpg')
grinnell_lake_photo[0].picture.attach(io: gl1, filename:'grinnell_lake1.jpg')
grinnell_lake_photo[1].picture.attach(io: gl2, filename: 'grinnell_lake2.jpg')
grinnell_lake_photo[2].picture.attach(io: gl3, filename:'grinnell_lake3.jpg')
grinnell_lake_photo[3].picture.attach(io: gl4, filename:'grinnell_lake4.jpg')

bullhead_lake = Hike.create!(name: 'BullHead Lake', national_park_id: national_parks[0].id, difficulty: "Easy", length: 6.9, route_type: "Out & Back", elevation_gain: 442, coordinates: [{lat: 48.799922, lon: -113.678465}, 
{lat: 48.796606, lon: -113.711376}, 
{lat: 48.788139, lon: -113.735086}], 
summary:"Head out on this beautiful route that, compared to others of the same distance, maintains a fairly level grade. This hike has many opportunities to see wildlife, especially moose, along a chain of lakes connected by creeks that sit below towering peaks." , 
description: "To access this hike, head west on Many Glacier Road to the Swiftcurrent Motor Inn. Park in the main parking lot for the Inn and head to the west end of the parking lot and look for the Swiftcurrent Pass trailhead.

The hike up the Swiftcurrent Creek drainage to Bullhead Lake is the ideal trail if you want to take a longer hike that is fairly flat, visits a few lakes, a waterfall, has picturesque vistas, and provides many great opportunities to see moose and other wildlife.

About a quarter of a mile in, the trail passes by Fishercap Lake. A poorly signed spur trail heads down to the shore of the lake. Make sure you swing down there and look for waterfowl and moose. 
Continue on to Redrock Lake with great vistas and a brief glimpse of Redrock Falls. The trail wraps around the lake to the cascading falls, and then heads on to Bullhead Lake, where the trail trades trees for open meadows and views at the head of the drainage.

At around the 3.5-mile marker, you'll come to a lovely viewpoint that overlooks the largest body of Bullhead Lake up toward Mt Grinnell. This is a great spot to have a snack or lunch break before heading back on the same route to your vehicle..")

bullhead_lake_photo = [
    Photo.create!(hike_id: bullhead_lake.id, user_id: users[3].id),
    Photo.create!(hike_id: bullhead_lake.id, user_id: users[4].id),
    Photo.create!(hike_id: bullhead_lake.id, user_id: users[5].id),
    Photo.create!(hike_id: bullhead_lake.id, user_id: users[2].id)
]
bl1 = open('https://alltreks-seeds.s3.amazonaws.com/bullhead_lake1.jpg')
bl2 = open('https://alltreks-seeds.s3.amazonaws.com/bullhead_lake2.jpg')
bl3 = open('https://alltreks-seeds.s3.amazonaws.com/bullhead_lake3.jpg')
bl4 = open('https://alltreks-seeds.s3.amazonaws.com/bullhead_lake4.png')
bullhead_lake_photo[0].picture.attach(io: bl1, filename:'bullhead_lake1.jpg')
bullhead_lake_photo[1].picture.attach(io: bl2, filename: 'bullhead_lake2.jpg')
bullhead_lake_photo[2].picture.attach(io: bl3, filename:'bullhead_lake3.jpg')
bullhead_lake_photo[3].picture.attach(io: bl4, filename:'bullhead_lake4.jpg')



grinnell_glacier = [ 
    Review.create!(description:'Fun overall but pretty tough hike if you ask me. Bring plenty of water', rating:4, hikes_id:grinnelle_Glacier.id, user_id:users[0].id),
    Review.create!(description:'My friend said that this was gonna be an easy hike. Come to find out that ', rating:4, hikes_id:grinnelle_Glacier.id, user_id:users[0].id),
    Review.create!(description:'I dont hike very often because I live in the big city but when I do I love to come out to Montana and hike these beautiful trails. As for the comment above the hike wasnt that hard.', rating:4, hikes_id:grinnelle_Glacier.id, user_id:users[0].id),

]
