import React, { useState } from 'react'
import PickDisplay from '../components/PickDisplay.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Inventory from '../components/Inventory.jsx'


const Home = () => {
    const [ search, setSearch ] = useState('');
    const [ selectedMap, setSelectedMap ] = useState('');

    return (
        <div className='page'>
            <PickDisplay selectedMap={selectedMap} setSelectedMap={setSelectedMap} />
            <SearchBar search={search} setSearch={setSearch} />
            <Inventory search={search} setSearch={setSearch} selectedMap={selectedMap}/>
        </div>
    )
}

export default Home