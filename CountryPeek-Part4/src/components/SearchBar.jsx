function SearchBar({ query, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search countries..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
        className="search-bar__input"
      />
    </div>
  )
}

export default SearchBar
