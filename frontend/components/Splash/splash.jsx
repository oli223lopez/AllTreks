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
                <div className="splashMessage">
                    <h1 >Find your next favorite trek
                    </h1>
                     <div>
                        <SearchBar searchData={this.props.allNationalParks} />
                    </div>   
                </div> 
               

                <h3 className="splashH3">
                    100,000+ trails. 20 million explorers. Endless memories.
                </h3>
                <p className="splashPtag">
                    The beauty of nature doesn’t need to be hard to find. Our goal is simple - 
                    build the largest collection of hand-curated trail guides, so you can explore the 
                    outdoors with confidence. Anytime. Anywhere.
                </p>
                <div className="splashBottom"></div>

                <footer className='links'>
                    <a href='https://www.linkedin.com/in/oliverlopez23/'>
                        <img src={window.linkedin_logo} width='40px' height='40px'/>
                    </a>
                    <a href='https://github.com/oli223lopez'>
                        <img src={window.github_logo} width='60px' height='40px'/>
                    </a>
                    <a href='https://angel.co/u/oliver-lopez-1' >
                        <img src={window.anglelist_logo} width='40px' height='40px'/>
                    </a>
                </footer>
            </div>
        )
    }


}

export default Splash




