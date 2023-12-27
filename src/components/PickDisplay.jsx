import React from 'react'
import '../css/main.css'
import Grid from '@mui/material/Grid';
import Pick from './Pick.jsx'
import MapSelect from './MapSelect.jsx'

const PickDisplay = () => {
    const banColor = '#FFB800'
    const friendlyColor = '#00A3FF'
    const enemyColor = '#F60000'
    return (
    <>
   
        <div className='content'>
            <MapSelect />
            <div className='bangroup'>
                <h2 className='picklabel'>Bans</h2>
                <div className='bans'>
                    <Pick borderColour={banColor} />
                    <Pick borderColour={banColor} />
                    <Pick borderColour={banColor} />
                    <Pick borderColour={banColor} />
                    <Pick borderColour={banColor} />
                    <Pick borderColour={banColor} />
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