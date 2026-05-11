import { useNavigate, useParams } from 'react-router-dom'
import useCountry from '../hooks/useCountry'
import Header from '../components/Header'

function CountryPage() {
  const { code } = useParams()
  const navigate = useNavigate()
  const { country, loading, error } = useCountry(code)

  if (loading) return <p className="page-status">Loading...</p>
  if (error) return <p className="page-status">{error}</p>

  return (
    <>
      <Header />
      <div className="country-page container">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

        <div className="country-page__layout">
          <img src={country.flags.svg} alt={country.name.common} className="country-page__flag" />

          <div>
            <h2>{country.name.common}</h2>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Capital:</strong> {country.capital?.[0]}</p>

            <div className="border-list">
              {country.borders?.map((border) => (
                <span key={border} className="border-badge">{border}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CountryPage
