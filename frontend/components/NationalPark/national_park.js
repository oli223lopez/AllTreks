import React, {useEffect, useState} from 'react' 
import {Link} from 'react-router-dom'


const NationalPark = (props) => {
    const [nationalPark, setNationalPark] = useState({})
    const [photos, setPhotos] = useState([])
 
    useEffect(() => {
        if(Object.values(nationalPark).length === 0) {
            props.fetchNP(props.nationalParkID)
            if(props.nationalPark.hikes){
                setNationalPark(props.nationalPark)
            }
        }
       
    })

   

   
    

    return(
        <div>
            {console.log(nationalPark)}
            {Object.values(nationalPark).length ? 
            nationalPark.hikes.map((hike, i) => {
                return(
                    <div key={i}> 

                    <Link to={`/hike/${hike.id}`}>
                        <div> 
                            <h3>
                                {hike.name}
                            </h3>
                        </div>
                        <div>
                            {hike.difficulty}
                        </div>
                        <div> 
                            {hike.length}
                        </div>
                        <div> 
                            {hike.elevation_gain}
                        </div>
                        <div> 
                            {hike.summary}
                        </div>

                    </Link>
                    </div>
                )
            })

            :
            null
            
            
            }
        </div>
    )
}

export default NationalPark