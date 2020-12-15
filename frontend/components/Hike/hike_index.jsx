import React from 'react'
import { Link } from 'react-router-dom'

class HikeIndex extends React.Component {
    constructor(props){
        super(props)
        // console.log(this.props.nationalPark)
        
    }
    
    componentDidMount(){
        this.props.receiveTreks(this.props.nationalPark)
    }
    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    dificulty(hikeDifficulty){
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
                {this.props.hikes.trails.map((hike) =>{
                    return(
                    <Link to='/'>
                        <h3>{hike.name}</h3>
                        <p>{this.props.nationalPark.name}</p>
                        <img src={hike.imgMedium} width='300' height='300'/>
                        <div>
                            <p>{this.dificulty(hike.difficulty)} Length: {hike.length}</p>
                            <p>{hike.summary}</p>
                        </div>
                    </Link>
                    )
                })}
            </div>
        )
        
    }

}

export default HikeIndex