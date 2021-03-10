import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";


const styles = {
    width: "420px",
    height: "calc(500px - 80px)",
    position: "absolute"
};

const Map = (props) => {
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1Ijoib2xpMjIzbG9wZXoiLCJhIjoiY2treGUwc2s5MXRxNzJ3b2lnNW14cjRkcCJ9.rsG2CMtwa1zfs5MHc8pCPA';
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/oli223lopez/ckkyjajnf522d17s9ezl1cgsv", // stylesheet location
                center: [0, 0],
                zoom: 5
            });

            map.on("load", () => {
                setMap(map);
                map.resize();
            });
            
            const nav = new mapboxgl.NavigationControl()
            setMap(map.addControl(nav))

            const hikeMarker = document.createElement('div');
            // hikeMarker.className='marker'
            if(props.hike.route_type === 'Point to Point'){
                hikeMarker.id = 'trailhead'
            }else{
                hikeMarker.id = 'combo-trailhead'
            }

            new mapboxgl.Marker(hikeMarker)
                .setLngLat({ lng: props.hike.coordinates[0], lat: props.hike.coordinates[1]})
                .addTo(map)

            let waypoints = ''
            const endPoint = { lng: props.hike.coordinates[props.hike.coordinates.length - 2], lat: props.hike.coordinates[props.hike.coordinates.length - 1] }

            props.hike.coordinates.forEach((coordinate, idx) => {
                if((idx + 1) % 2 === 0){
                    if((idx + 1) === props.hike.coordinates.length){
                        waypoints += coordinate
                    }else{
                        waypoints += coordinate + ';'
                    }
                }else{
                    waypoints += coordinate + ','
                }
            })
            // console.log(waypoints)

            const getRoute = () => {
                const api = `https://api.mapbox.com/directions/v5/mapbox/walking/${waypoints}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`;

                const drawRoute = (response) => {
                    const data = response.routes[0];
                    const route = data.geometry.coordinates
                    const geojson = { 
                        type: 'Feature', 
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: route
                        }
                    }
                
                
                    let bounds = route.reduce(function(bounds, coord){
                        return bounds.extend(coord)
                    }, new mapboxgl.LngLatBounds(route[0], route[0]));
                    
                    map.fitBounds(bounds, { 
                        padding: 100
                    })
                    
                    if(map.getSource('route')){
                        map.getSource('route').setData(geojson);
                    }else{
                        map.addLayer({ 
                            id: 'route',
                            type: 'line',
                            source: {
                                type: 'geojson',
                                data: geojson
                            },
                            layout: {
                                'line-join': 'round',
                                'line-cap': 'round'
                            },
                            paint: {
                                'line-color': '#FF0000',
                                'line-width': 5,
                                'line-opacity': 0.90
                            }
                        })
                    }
                }

                $.ajax({
                    url: api,
                    method: "GET",
                    success: (response) => drawRoute(response)
                })
            }

            map.on('load', () => {
                map.resize();
                getRoute(endPoint)

                if(props.hike.route_type === 'Point to Point'){
                    const trailEnd = document.createElement('div')
                    trailEnd.id = 'marker'
                    trailEnd.id = 'trail-end'

                    new mapboxgl.Marker(trailEnd)
                        .setLngLat(endPoint)
                        .addTo(this.map)
                }
            })

        };

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map]);





    return( <div ref={el => (mapContainer.current = el)} style={styles} >

            </div>
        );
};

export default Map;


