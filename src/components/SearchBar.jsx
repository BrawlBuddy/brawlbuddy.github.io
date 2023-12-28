import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import '../css/main.css'

const SearchBar = ({ search, setSearch }) => {
    const searchBox = {
        width: '65%',
        height: '40px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#BFBFBF',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '10px',
    }

    const handleChange = (value) => {
        setSearch(value);
    }

    return (
      <>
        <div className='content'>
          <div style={searchBox}>
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