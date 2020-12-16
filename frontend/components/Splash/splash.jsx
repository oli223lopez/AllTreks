import React from 'react'
import {Link} from 'react-router-dom'
import Autocomplete from '../Autocomplete/autocomplete'

class Splash extends React.Component{
    constructor(props){
        super(props)

    }
    


    render(){
        const searchList = [
            'Glacier National Park', 
            'Grinnell Glacier',
            'Highline to The Loop',
            'Avalanche Lake via Trail of the Cedars',
            'Hidden Lake Overlook',
            'Gunsight Pass',
            'Ptarmigan Tunnel Route',
            'Many Glacier Loop',
            'Grinnell Lake',
            'Bullhead Lake'
        ]
        return(
            <div>
                <div className="splashSearch">
                    <Autocomplete searchList = {searchList}/>
                </div>

                <img src={window.treksLogoURL} className="image" width='650' height='650' />

                <h3 className="splashMessage">Find your next favorite trek</h3>


                <h3 className="splashH3">
                    100,000+ trails. 20 million explorers. Endless memories.
                </h3>
                <p className="splashPtag">
                    The beauty of nature doesn’t need to be hard to find. Our goal is simple - 
                    build the largest collection of hand-curated trail guides, so you can explore the 
                    outdoors with confidence. Anytime. Anywhere.
                </p>
                <div className="splashBottom"></div>
                <Link to="/national_park/Glacier_National_Park">Glacier National Park</Link>
            </div>
        )
    }


}

export default Splash




