import React, { useContext } from 'react'
import InventoryPick from './InventoryPick'
import { InventoryContext } from '../contexts/InventoryContext'

const Inventory = () => {
    
    const inventoryBox = {
        width: '970px',
        height: '350px',
        borderRadius: '5px',
        backgroundColor: '#282828',
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gridGap: '10px',

    }
    const [inventory, setInventory] = useContext(InventoryContext)
    return (
    <>
        <div className='content'>
            <div style={inventoryBox}>
                {inventory.map((brawler, index) => (
                    <InventoryPick borderColour='#FFB800' imageSrc={brawler.image} key={brawler.name}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default Inventory