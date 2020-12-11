import React from 'react'
import GreetingContainer from '../Greetings/greeting_container'


class Splash extends React.Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <div>
                <GreetingContainer />


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
            </div>
        )
    }


}

export default Splash




