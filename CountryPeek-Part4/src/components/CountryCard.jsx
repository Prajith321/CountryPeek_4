import { Link } from 'react-router-dom'

function CountryCard({ country }) {
  return (
    <Link to={`/country/${country.cca3}`} className="card">
      <img src={country.flags.svg} alt={country.name.common} className="card__flag" />
      <div className="card__body">
        <h3>{country.name.common}</h3>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
      </div>
    </Link>
  )
}

export default CountryCard
