import React from 'react'
import Pick from './Pick.jsx'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const InventoryPick = ({ imageSrc, borderColour }) => {
  
    const banColor = '#FFB800'
    const friendlyColor = '#00A3FF'
    const enemyColor = '#F60000'
    return (
    <>
        <div className='inventory-pick'>
            <Pick imageSrc={imageSrc} borderColour={borderColour} />
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                <Button size='small' color='primary'>F</Button>
                <Button size='small' color='warning'>B</Button>
                <Button size='small' color='error'>E</Button>
            </ButtonGroup>
        </div>
        
    </>
  )
}

export default InventoryPick