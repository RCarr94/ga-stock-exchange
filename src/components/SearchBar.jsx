
export default function SearchBar({ sort, filter, handleSort, handleFilter }) {
  // bind the radio inputs' checked prop to boolean state variables
  return (
    <div className="searchbar">
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={sort === "name"} onChange={() => handleSort("name")}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={sort === 'price'} onChange={() => handleSort('price')}/>
        Price
      </label>
      <br/>
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}
