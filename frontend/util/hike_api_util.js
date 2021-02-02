



export const fetchHike = hike_id => {
    return $.ajax({
        url: `/api/hikes/${hike_id}`,
        method: "GET"
    })
}
