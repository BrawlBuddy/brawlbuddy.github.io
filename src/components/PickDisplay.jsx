import React, { useState, useEffect } from 'react'
import '../css/main.css'
import Grid from '@mui/material/Grid';
import Pick from './Pick.jsx'
import MapSelect from './MapSelect.jsx'
import { useBrawlersContext } from '../contexts/BrawlersContext'

const PickDisplay = () => {
    const banColor = '#FFB800'
    const friendlyColor = '#00A3FF'
    const enemyColor = '#F60000'

    const { state, dispatch } = useBrawlersContext();
    const [ bannedDisplay, setBannedDisplay ] = useState(state.bannedBrawlers);
    useEffect(() => {
        setBannedDisplay(state.bannedBrawlers);
        for (let i = 0; i < 6 - state.bannedBrawlers.length; i++) {
            setBannedDisplay(bannedEmpty => [...bannedEmpty, {name: 'empty'}]);
        }
    }, [state.bannedBrawlers]);
    return (
    <>
   
        <div className='content'>
            <MapSelect />
            <div className='bangroup'>
                <h2 className='picklabel'>Bans</h2>
                <div className='bans'>
                    {bannedDisplay.map((brawler, index) => (
                        (brawler.name === 'empty') ? (
                            <Pick borderColour={banColor} key={index} />
                        ) : (
                            <Pick borderColour={banColor} imageSrc={brawler.image} key={brawler.name}/>
                        )
                    ))}
                </div>
            </div>
        </div>

        <div className='content'>
            <div className='pickgroup'>
                <h2 className='picklabel'>Friendly</h2>
                <div className='picks-row-2'>
                    <Pick borderColour={friendlyColor} />
                    <Pick borderColour={friendlyColor} />
                    <Pick borderColour={friendlyColor} />
                </div>
            </div>
            <div className='pickgroup'>
                <h2 className='picklabel'>Enemy</h2>
                <div className='picks-row-2'>
                <Pick borderColour={enemyColor} />
                <Pick borderColour={enemyColor} />
                <Pick borderColour={enemyColor} />
                </div>
            </div>
            
        </div>
        
    </>
  )
}

export default PickDisplay