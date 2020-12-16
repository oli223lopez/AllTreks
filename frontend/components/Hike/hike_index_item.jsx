import React from 'react'



class HikeIndex extends React.Component{
    constructor(props){
        super(props)
        // console.log(this.props.showHikeThunk)
        console.log(this.props.receiveHikeAPI)
    }

    componentDidMount(){
        this.props.receiveHikeAPI(this.props.hikeName)
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

    render(){
        const hike = this.props.hike
        if(!this.isEmpty(hike)){
            return(
                <div>
                    <img src={hike.imgMedium}/>
                    <h3>{hike.name}</h3>
                    <div className="">
                        <p className="">{this.difficulty(hike.difficulty)}</p>
                    </div>
                    <div>
                        <p className="">
                            Length: {hike.length}
                        </p>
                        <p>
                            Elevation gain: {hike.ascent}
                        </p>
                    </div>

                    <p>{hike.summary}</p>

                    <div id='mapId'></div>
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