import './Filter.css'

const Filter = ({ handleFilter }) => {
  return (
    <div className='filter-container'>
      <label htmlFor='filter-contact-name'>Search by name </label>
      <input
        id='filter-contact-name'
        type='text'
        onChange={handleFilter}
      />
    </div>
  )
}

export default Filter
