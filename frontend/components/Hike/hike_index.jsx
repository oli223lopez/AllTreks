import React from 'react'
import { Link } from 'react-router-dom'

class HikeIndex extends React.Component {
    constructor(props){
        super(props)
        // console.log(this.props.nationalPark)
    console.log(this.props)
    this.receiveTrek = this.props.receiveTrek.bind(this)
    this.showHikeThunk = this.props.showHikeThunk.bind(this)
    }
    
    componentDidMount(){
        this.props.receiveTreks(this.props.nationalPark)
    }

    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    difficulty(hikeDifficulty){
        if (hikeDifficulty === 'green'){
            return 'Easy'
        }else if(hikeDifficulty === 'greenBlue'){
            return 'Easy/Intermediate'
        }else if(hikeDifficulty === 'blue'){
            return 'Intermediate';
        }else if(hikeDifficulty === 'blueBlack'){
            return 'Intermidate'
        }else if(hikeDifficulty === 'black'){
            return 'Difficult'
        }else{
            return 'Dummy Difficult'
        }
    }
    
    render(){
        console.log(this.props.hikes)
        
        if (this.isEmpty(this.props.hikes)) {
            return <div> not working</div>
        }
        return (
            <div>
                {this.props.hikes.trails.map((hike, id) =>{
                    return(
                    <div key={id} className="hikes">
                            <h3 className="hikeLink"><Link to={`/hike/${hike.name.split(" ").join("_")}`}>
                                {hike.name}
                                </Link>
                            </h3>
                        <p className="nationalParkName">{this.props.nationalPark.name}</p>
                        <img className='hikeImg' src={hike.imgMedium} width='300' height='300'/>
                        <div className="hikeAttributes">
                            <p className="difficulty">{this.difficulty(hike.difficulty)}</p>
                           <p className="length">
                               Length: {hike.length}
                            </p> 
                        </div>
                            <p className="summary">{hike.summary}</p>
                    </div>
                    )
                })}
            </div>
        )
        
    }

}

export default HikeIndex