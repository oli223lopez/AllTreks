import React from 'react'
import HikeIndexContainer from '../Hike/hike_index_container'


class NationalParkShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nationalPark: {}
        }
    }

    componentDidMount(){
       this.props.receiveNationalPark(this.props.nationalParkId);
    }


    render(){
        // console.log(this.props.nationalPark)

      if(!this.props.nationalPark){
          return <div> not working</div>
      }
      return(
          <div>
              <h1>{this.props.nationalPark.name}</h1>
              
                <HikeIndexContainer nationalPark={this.props.nationalPark}  />
            </div>
        )
    
      
    }

}

export default NationalParkShow