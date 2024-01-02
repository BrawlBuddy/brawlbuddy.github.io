import React from 'react'
import Button from '@mui/material/Button';
import { useBrawlersContext } from '../contexts/BrawlersContext'

const ClearButton = ({ setSelectedMap }) => {
    
    const { state, dispatch } = useBrawlersContext();
    const handleClick = () => {
        dispatch({ type: 'RESET' });
        setSelectedMap('');
    }
    
    return (
    <>
        <div className='clearButton'>
            <Button variant='text' sx={{width: "100%", height: "100%", color: "white"}} onClick={() => handleClick()}>
                Clear All
            </Button>
        </div>
    </>
  )
}

export default ClearButton