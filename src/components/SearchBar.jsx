import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import '../css/main.css'

const SearchBar = ({ search, setSearch }) => {

    const handleChange = (value) => {
        setSearch(value);
    }

    return (
      <>
        <div className='content'>
          <div className='searchBox'>
            <SearchIcon style={{marginRight: '10px'}}/>
            <input 
              type='text' 
              onChange={(e) => handleChange(e.target.value)} 
              value = {search}
              />
          </div>
        </div>
      </>
      
      
  )
}

export default SearchBar