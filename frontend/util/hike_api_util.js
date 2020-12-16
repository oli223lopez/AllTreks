


export const fetchTrek = hike_API_id => {
    return $.ajax({
        url: `https://www.hikingproject.com/data/get-trails-by-id?ids=${hike_API_id}&key=200992181-b5ded87fb6ee5c01ef373e5f6451f3e3`,
        method: 'GET'
    })
}



export const fetchNationalPark = (nationalPark) => {
    return $.ajax({
        url: `https://www.hikingproject.com/data/get-trails?lat=${nationalPark.lat}&lon=-${nationalPark.lon}&maxDistance=10&key=200992181-b5ded87fb6ee5c01ef373e5f6451f3e3`,
        method: 'GET'
    })
}

export const showHikeTrail = hikeName => {
    return $.ajax({
        url: `/api/hikes/${hikeName}`,
        method: "GET"
    })
}
