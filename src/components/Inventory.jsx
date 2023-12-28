import React, { useContext } from 'react'
import { useBrawlersContext } from '../contexts/BrawlersContext'
import InventoryPick from './InventoryPick';

const Inventory = () => {
    
    const inventoryBox = {
        width: '970px',
        height: '350px',
        borderRadius: '5px',
        backgroundColor: '#282828',
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gridGap: '10px',
        overflow: 'auto',
        padding: '10px',
    }

    const { state, dispatch } = useBrawlersContext();

    return (
    <>
        <div className='content'>
            <div style={inventoryBox}>
                {state.brawlers.map(brawler => (
                    <InventoryPick imageSrc={brawler.image} borderColour='#BCBCBC' brawler={brawler} key={brawler.name}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default Inventory