




export const allHikes = () => {
    return $.ajax({
        url: 'https://www.hikingproject.com/data/get-trails?lat=41.4597&lon=-73.9589&maxDistance=10&key=200992181-b5ded87fb6ee5c01ef373e5f6451f3e3',
        method: 'GET'
    })
}