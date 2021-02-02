import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from '../SearchBar/searchbar'

class Splash extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchAllNP()
    }
    


    render(){
        return(
            <div>
            
              


                <img src={window.treksLogoURL} className="image" width='650' height='650' />

                <h3 className="splashMessage">Find your next favorite trek</h3>
                <SearchBar searchData = {this.props.allNationalParks}/>

                <h3 className="splashH3">
                    100,000+ trails. 20 million explorers. Endless memories.
                </h3>
                <p className="splashPtag">
                    The beauty of nature doesn’t need to be hard to find. Our goal is simple - 
                    build the largest collection of hand-curated trail guides, so you can explore the 
                    outdoors with confidence. Anytime. Anywhere.
                </p>
                <div className="splashBottom"></div>
            </div>
        )
    }


}

export default Splash




