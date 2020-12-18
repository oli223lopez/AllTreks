import React from 'react'
import { Link } from 'react-router-dom'



class OtherSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputVal: ''
        }
        this.selectName = this.selectName.bind(this)
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({ inputVal: e.currentTarget.value })
    }

    matches() {
        const matches = []
        if (this.state.inputVal === "") {
            return []
        }

        this.props.searchList.forEach(name => {
            const lowerCaseName = name.toLowerCase()
            if (lowerCaseName.includes(this.state.inputVal.toLowerCase())) {
                matches.push(name)
            }
        })

        if (matches.length === 0) {
            matches.push('No matches')
        }
        return matches
    }

    selectName(event) {
        const name = event.currentTarget.innerText
        this.setState({ inputVal: name })
    }


    render() {
        const results = this.matches().map((result, i) => {
            if (result.includes('National')) {
                return (
                    <li key={i} onClick={this.selectName}>
                        <Link to={`/national_park/${result.split(" ").join("_")}`}
                        className="otherSearchItem">{result}</Link>
                    </li>
                )
            } else {
                return (
                    <li key={i} onClick={this.selectName}>
                        <Link to={`/hike/${result.split(" ").join("_")}`}
                        className="otherSearchItem">{result}</Link>
                    </li>
                )
            }
        })
        return (
            <div>
                <input type="text" onChange={this.update} className="otherSearchBar"/>
                <button type="submit">Search</button>

                <ul className="hide">
                    {results}
                </ul>
            </div>

        )
    }

}

export default OtherSearch