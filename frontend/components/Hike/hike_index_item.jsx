import React from 'react'
import {Link} from 'react-router-dom'
import OtherSearch from '../Autocomplete/otherSearch'
import CreateReviewContainer from '../Review/create_review_form_container'




class HikeIndex extends React.Component{
    constructor(props){
        super(props)
       
        
    }

    componentDidMount(){
        this.props.receiveHikeAPI(this.props.hikeName)
        this.props.showHikeThunk(this.props.hikeName)
        
    }


    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    difficulty(hikeDifficulty) {
        if (hikeDifficulty === 'green') {
            return 'Easy'
        } else if (hikeDifficulty === 'greenBlue') {
            return 'Easy/Intermediate'
        } else if (hikeDifficulty === 'blue') {
            return 'Intermediate';
        } else if (hikeDifficulty === 'blueBlack') {
            return 'Intermidate'
        } else if (hikeDifficulty === 'black') {
            return 'Difficult'
        } else {
            return 'Dummy Difficult'
        }
    }

    ratingAvg(){
        let num = 0;
        let count = 0;
        // console.log(this.props.hikeDB.reviews)
        if(this.props.hikeDB.reviews){
            Object.values(this.props.hikeDB.reviews).forEach(review => {
                num += review.rating
                count++
            })
            return num/count
        }

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
        const hikeAPI = this.props.hikeAPI
        const hikeDB = this.props.hikeDB
        const hikeReviews = () => {
            
            if(this.isEmpty(hikeDB)){
                return( null)
            }else{
                // console.log(hikeDB.reviews)
                if(!hikeDB.reviews){
                    return(null)
                }else{
                    // console.log(Object.values(hikeDB.reviews)[0].user)
                    return( 
                        
                        <div> 
                            <h3 className="rating">
                                Total Review Rating: {this.ratingAvg()}
                            </h3>

                            {Object.values(hikeDB.reviews).map((review, id) => {
                            return(
                                <div key={id} className="review">
                                    
                                    <p className="reviewRating">Review Rating: {review.rating}</p>
                                    <p className="reviewDescription">
                                        {review.description}
                                    </p>
                                    {/* <Link to={`/hike/${hikeDB.name}/edit_review/${review.id}`}>Edit Review</Link> */}
                                </div>
                                
                                )
                            })
                            
                            } 
                        </div>
                        
                    )
                }
            }
    }

        
        if(!this.isEmpty(hikeAPI)){
            return(
                <div>
                    <div className="otherTest">
                        <OtherSearch searchList={searchList} />
                    </div>

                    <div className="hikeShow">
                    
                        <img src={hikeAPI.imgMedium} className="hikeShowImg"/>
                        <h3 className="hikeShowName">{hikeAPI.name}</h3>
                        <div className="">
                            <p className="hikeDifficulty">{this.difficulty(hikeAPI.difficulty)}</p>
                        </div>
                        <div className="hikeSummaryStuff">
                            <p className="SummaryDeclaration">Summary: </p>
                            <p className="hikeSummary">{hikeAPI.summary}</p>

                        </div>
                        <div className="hikeShowAttributes">
                            <p className="length">
                                Length: {hikeAPI.length}m
                            </p>
                            <p className="elevation">
                                Elevation gain: {hikeAPI.ascent}
                            </p>
                        </div>
                        <div>
                            <p className="hikeShowDescriptionDeclaration">Description:</p>
                            <p className="hikeShowDescription"> {hikeDB.description}</p>
                        </div>
                        {console.log(this.props.hikeDB)}
                        <div>
                            <h3>Write a Review</h3>
                            <CreateReviewContainer hike_id={this.props.hikeDB.id} hikeDB={hikeDB}/>
                        </div>

                        <div>

                        {hikeReviews()}
                        </div>

                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    
                </div>
            )
        }
    }


}

export default HikeIndex