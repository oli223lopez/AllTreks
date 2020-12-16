import React from 'react'
import { Link } from 'react-router-dom'



class Autocomplete extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            inputVal: ''
        }
        this.selectName = this.selectName.bind(this)
        this.update = this.update.bind(this)
    }

    update(e){
       this.setState({inputVal: e.currentTarget.value})
    }

    matches(){
        const matches = []
        if(this.state.inputVal === ""){
            return this.props.searchList
        }

        this.props.searchList.forEach(name => {
            const subName = name.slice(0, this.state.inputVal.length)
            if(subName.toLowerCase() === this.state.inputVal.toLowerCase()){
                matches.push(name)
            }
        })

        if(matches.length === 0){
            matches.push('No matches')
        }
        return matches
    }

    selectName(event){
        const name = event.currentTarget.innerText
        this.setState({inputVal: name})
    }


    render(){
        const results = this.matches().map((result, i) => {
            if(result.includes('National')){
                return(
                        <li key={i} onClick={this.selectName} className="searchItem">
                            <Link to={`/national_park/${result.split(" ").join("_")}`}>{result}</Link>
                        </li>
                    )
            }else{
                return(
                    <li key={i} onClick={this.selectName} className="searchItem">
                        <Link to={`/hike/${result.split(" ").join("_")}`}>{result}</Link>
                    </li>
                )
            }
        })
        return(
            <div>
                <input type="text" onChange={this.update} />
                <button type="submit">Search</button>
                
                <ul className="hide">
                    {results}
                </ul>
            </div>

        )
    }

}

export default Autocomplete