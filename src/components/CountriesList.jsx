//import { useState } from 'react'
import { Link } from 'react-router-dom'
import countriesDB from '../countries.json'



const CountriesList = ({countries}) => {

    return (
        <div>
            <div className="col-5">
                <div className="list-group">
                    {countries.map((list) => {
                        return (
                            <>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${list.alpha2Code.toLowerCase()}.png`} alt=''/>
                            < Link className="list-group-item list-group-item-action" to={list.alpha3Code} > {list.name.common}</Link>
                            </>
                )
                    })}
                </div>
            </div>
        </div >
    )
}

export default CountriesList
