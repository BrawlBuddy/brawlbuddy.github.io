import React, { useState } from 'react'
import PickDisplay from '../components/PickDisplay.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Inventory from '../components/Inventory.jsx'
import { InventoryContext } from '../contexts/InventoryContext.jsx'
import { BrawlersProvider } from '../contexts/BrawlersContext.jsx'

const Home = () => {
    const [ search, setSearch ] = useState('');
    return (
        <BrawlersProvider>
            <div className='page'>
                <PickDisplay />
                <SearchBar search={search} setSearch={setSearch} />
                <Inventory search={search} setSearch={setSearch}/>
            </div>
        </BrawlersProvider>
    )
}

export default Home