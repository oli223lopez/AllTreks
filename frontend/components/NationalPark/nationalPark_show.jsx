import React from 'react'
import HikeIndexContainer from '../Hike/hike_index_container'
import OtherSearch from '../Autocomplete/otherSearch'


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
        // console.log(this.props.nationalPark)

      if(this.props.nationalPark === undefined){
          return <div> </div>
      }
      return(
          <div>
              <div className="otherTest">
                  <OtherSearch searchList={searchList} />
              </div>
              <div className="nationalDiv"> 
                <h1 className="nationalParkHeader">Best Hikes in {this.props.nationalPark.name.split("_").join(" ")}</h1>
                
                    <HikeIndexContainer nationalPark={this.props.nationalPark}  />

              </div>
            </div>
        )
    
      
    }

}

export default NationalParkShow