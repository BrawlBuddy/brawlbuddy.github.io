import React from 'react'

const SearchBar = () => {
    const searchBox = {
        width: '65%',
        height: '40px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#BFBFBF',
    }
    return (
      <>
        <div className='content'>
          <div style={searchBox}></div>
        </div>
      </>
      
      
  )
}

export default SearchBar