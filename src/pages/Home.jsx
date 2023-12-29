import React, { useState } from 'react'
import PickDisplay from '../components/PickDisplay.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Inventory from '../components/Inventory.jsx'


const Home = () => {
    const [ search, setSearch ] = useState('');
    const [ selectedMap, setSelectedMap ] = useState('');
    const [ loading, setLoading ] = useState(false);

    return (
        <div className='page'>
            <PickDisplay selectedMap={selectedMap} setSelectedMap={setSelectedMap} setLoading={setLoading} />
            <SearchBar search={search} setSearch={setSearch} />
            <Inventory search={search} setSearch={setSearch} selectedMap={selectedMap} loading={loading} setLoading={setLoading}/>
        </div>
    )
}

export default Home