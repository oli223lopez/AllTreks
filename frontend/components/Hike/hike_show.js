import React, {useState, useEffect} from 'react'

const HikeShow = (props) => {
    const [hike, setHike] = useState({})


    useEffect(() => {
        props.fetchHike(props.hikeID).then(res => setHike(res.hike))
    }, [])
    


    return(
        <div>
            {Object.values(hike).length ? 
            <div>
                <div> 
                    {hike.name}
                </div>
                <div> 
                    Length: {hike.length}
                </div>
                <div> 
                    Route Type: {hike.route_type}
                </div>
                <div> 
                    Elevation Gain: {hike.elevation_gain}
                </div>
                <div> 
                    Summary: {hike.summary}
                </div>
                <div> 
                    Description: {hike.description}
                </div>
            </div>
            
            : null}
        </div>
    )
}

export default HikeShow