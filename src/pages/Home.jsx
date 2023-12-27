import React, { useState } from 'react'
import PickDisplay from '../components/PickDisplay.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Inventory from '../components/Inventory.jsx'
import { InventoryContext } from '../contexts/InventoryContext.jsx'
import { BrawlersProvider } from '../contexts/BrawlersContext.jsx'

const Home = () => {
    const [inventory, setInventory] = useState([{
        name: 'Bea',
        image: 'https://tiermaker.com/images/chart/chart/brawl-stars---brawlers-v2-jule-2022-470498/portraitbeapng.png'
    }, {name: 'Ash',
    image: 'https://tiermaker.com/images/chart/chart/brawl-stars---brawlers-v2-jule-2022-470498/portraitashpng.png'}])
    return (
        <BrawlersProvider>
            <div className='page'>
                <PickDisplay />
                <SearchBar />
                <Inventory />
            </div>
        </BrawlersProvider>
    )
}

export default Home