import React from 'react'
import HikeIndexContainer from '../Hike/hike_index_container'


class NationalParkShow extends React.Component {
    constructor(props){
        super(props)
        // console.log(this.props.nationalParkName)
        this.state = {
            nationalPark: {}
        }
    }

    componentDidMount(){
        
        this.props.receiveNationalPark(this.props.nationalParkName);
    }


    render(){
        console.log(this.props.nationalPark)

      if(this.props.nationalPark === undefined){
          return <div> </div>
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