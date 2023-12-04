import './index.css'

const CountriesItem = props => {
  const {countriesNameDetail, onSubmitCountry} = props
  const {name, isVisited, id} = countriesNameDetail
  const countryText = isVisited ? 'visited' : 'visit'
  const onSubmitCountryVisited = () => {
    onSubmitCountry(id)
  }

  return (
    <li className="list-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p>{countryText}</p>
      ) : (
        <button
          onClick={onSubmitCountryVisited}
          className="submit-btn"
          type="submit"
        >
          {countryText}
        </button>
      )}
    </li>
  )
}

export default CountriesItem
