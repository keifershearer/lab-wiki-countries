import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([])

  console.log(useParams())
  const code = 'https://ih-countries-api.herokuapp.com/countries'
  const fetchCountries = async () => {
    try {
      const raw = await fetch(`${code}`)
      const res = await raw.json()
      setCountries(res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchCountries()
  }, [])
  if (!countries.length) {
    return 'Loading'
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/:url" element={<CountryDetails />} />
      </Routes>
      <ul>

        <CountriesList {...{ countries }} />
      </ul>
    </div >
  );
}

export default App;

