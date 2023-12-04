import './index.css'

const VisitedCountriesList = props => {
  const {countryDetail} = props
  const {imageUrl, name, id} = countryDetail
  const handleRemoveItem = () => {
    const {onRemoveCountry} = props
    onRemoveCountry(id)
  }
  return (
    <li>
      <img src={imageUrl} alt="thumbnail" />
      <div className="item-name-btn-card">
        <p>{name}</p>
        <button type="submit" onClick={handleRemoveItem}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountriesList
