import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapSigns, faTree } from "@fortawesome/free-solid-svg-icons";



const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState('')

    

    const update = (e) => {
        setSearchInput(e.currentTarget.value)
    }

    const matches=  ()  =>{
        // console.log(searchInput)
        // console.log(props.searchData)
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

    const results = () => {
        
        // console.log(matches())
       return matches().map((result, i) => {
           if(result.name){
            if (result.name.includes('National')) {
                return (
                    <li key={i}  className="searchItem">
                        <div>
                            <Link to={`/national_park/${result.id}`} className="searchResultNaitonalParkIcon">
                                <FontAwesomeIcon icon={faTree}  />
                            </Link>
                            <Link to={`/national_park/${result.id}`} className="searchItemLink" >
                                    {result.name}
                            </Link>
                        </div>
                    </li>
                )
            } else {
                return (
                    <li key={i} className="searchItem">
                        <div>
                            <Link to={`/hike/${result.id}`} className="searchResultHikeIcon" >
                                <FontAwesomeIcon icon={faMapSigns} />
                            </Link>
                            <Link to={`/hike/${result.id}`}className="searchItemLink" >
                                    {result.name}
                            </Link>
                        </div>
                    </li>
                )
            }
        }else{
           return matches().map((noResult, i) => {
                return(
                    <li key={i} className="noResults">{noResult}</li>
                )
            })
        }
        })
        
    }


    // const handleClickOutside = (e) => {
    //     let input = document.getElementById('input');
    //     if (e.target && !e.target.matches("li.searchItem") && e.target !== input) {
    //         this.setState({
    //             searchVal: ''
    //         })
    //     }

    // }

    
    
    
    
    return(
        <div className='searchBarComponent'>
            <form className='searchBarForm'>
                <input type='text' onChange={(e) => update(e)} value={searchInput} id='input' placeholder='Enter a park or trail name'
                className='searchBarInput'
                />
            </form>
            <div className='searchResults'> 

            {results()}
            </div>
        </div>
    )

}

export default SearchBar