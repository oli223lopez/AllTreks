import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'



const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState('')

    const update = (e) => {
        setSearchInput(e.currentTarget.value)
    }

    const matches=  ()  =>{
        const matches = []
        if (searchInput === "") {
            return []
        }

        Object.values(props.searchData).forEach( nationalPark => {
            if(nationalPark.name.toLowerCase().includes(searchInput.toLowerCase())){
                matches.push(nationalPark)
            }
            nationalPark.hikes.forEach(hike => {
                if (hike.name.toLowerCase().includes(searchInput.toLowerCase())) {
                    matches.push(hike)
                }
            })

        })  

        if (matches.length === 0) {
            matches.push('No matches')
        }
        return matches
    }

    // const selectName = (event) => {
    //     const name = event.currentTarget.innerText
    //     setSearchInput(name)
    // }
    
    const results = () => {
        
        console.log(matches())
       return matches().map((result, i) => {
           if(result.name){
            if (result.name.includes('National')) {
                return (
                    <li key={i}  className="searchItem">
                        <Link to={`/national_park/${result.id}`}
                            className="searchItemLink" >{result.name}</Link>
                    </li>
                )
            } else {
                return (
                    <li key={i} className="searchItem">
                        <Link to={`/hike/${result.id}`}
                            className="searchItemLink" >{result.name}</Link>
                    </li>
                )
            }
        }else{
           return matches().map((noResult, i) => {
                return(
                    <li key={i} className="searchItem">{noResult}</li>
                )
            })
        }
        })
        
    }
    
    
    
    
    return(
        <div>
            <form>
                <input type='text' onChange={(e) => update(e)} value={searchInput} placeholder='Search'/>
                <button type='submit'>Search</button>
            </form>
            {results()}
        </div>
    )

}

export default SearchBar