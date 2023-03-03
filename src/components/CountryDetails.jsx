import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import countriesDB from '../countries.json'

const CountryDetails = () => {
    const {url} = useParams()
        const countries = countriesDB.filter((element) => {
            return element.alpha3Code === url
        })
        const country = countries[0]
    return (
        
        <div><div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td >Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map((element)=> {
                                    return (<li><Link to={`/${element}`}>{element}</Link> </li>
                                    )
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default CountryDetails
