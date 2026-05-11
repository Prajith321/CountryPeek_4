import { useEffect, useState } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import CountryCard from '../components/CountryCard'

function Home() {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [region, setRegion] = useState('All')
  const [sortBy, setSortBy] = useState('')

  useEffect(() => {
    async function fetchCountries() {
      if (!query.trim()) {
        setCountries([])
        setRegion('All')
        setSortBy('')
        return
      }

      try {
        setLoading(true)
        const res = await fetch(`https://restcountries.com/v3.1/name/${query}`)
        const data = await res.json()
        setCountries(Array.isArray(data) ? data : [])
      } catch (error) {
        setCountries([])
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [query])

  const displayed = [...countries]
    .filter((country) => region === 'All' || country.region === region)
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.common.localeCompare(b.name.common)
      }

      if (sortBy === 'population') {
        return b.population - a.population
      }

      return 0
    })

  return (
    <div>
      <Header />

      <main className="container">
        <SearchBar query={query} onChange={setQuery} />

        <FilterBar
          region={region}
          onRegionChange={setRegion}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {loading ? (
          <p>Loading...</p>
        ) : displayed.length > 0 ? (
          <div className="cards-grid">
            {displayed.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
          </div>
        ) : (
          <p className="placeholder">Search for a country to begin.</p>
        )}
      </main>
    </div>
  )
}

export default Home
