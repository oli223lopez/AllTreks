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
        <div className='nationalPark'>

            <div className='nationalParkName'>Best Trails in {nationalPark.name}</div>

            <div className='nationalParkHikeList'>
                {console.log(nationalPark)}
                {Object.values(nationalPark).length ? 

                nationalPark.hikes.map((hike, i) => {
                    return(
                        <div key={i} className='nationalParkHike'> 

                            <Link to={`/hike/${hike.id}`} className='nationalParkHikeLink'>
                                <div >
                                    <img className='nationalParkHikeImg' src={hike.photos[0].photoUrl} heigth='200px' width='250px'/> 
                                </div>
                                <div className='nationalParkHikeAttributes'>
                                    <div className='nationalParkHikeName'>
                                            {`#${i + 1} - ` + hike.name}
                                    </div>
                                    <div className={`nationalParkHikeDifficulty${hike.difficulty}`}>
                                        {hike.difficulty}
                                    </div>
                                    <div className='nationalParkHikeLength'> 
                                        Length: {hike.length}
                                    </div>
                                    <div className='nationalParkHikeElevationGain'> 
                                        Elevation Gain: {hike.elevation_gain}
                                    </div>
                                    <div className='nationalParkHikeSummary'> 
                                        Summary: {hike.summary}
                                    </div>
                                </div>

                            </Link>
                        </div>
                    )
                })

                :
                null
                
                
                }
            </div> 
        </div>
    )
}

export default NationalPark