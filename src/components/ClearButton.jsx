import React from 'react'
import Button from '@mui/material/Button';
import { useBrawlersContext } from '../contexts/BrawlersContext'

const ClearButton = ({ setSelectedMap }) => {
    const buttonStyle = {
        width: '170px',
        height: '75px',
        border: '5px solid #BCBCBC',
        borderRadius: '5%',
        position: 'absolute',
        right: '0px',
        bottom: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    const { state, dispatch } = useBrawlersContext();
    const handleClick = () => {
        dispatch({ type: 'RESET' });
        setSelectedMap('');
    }
    
    return (
    <>
        <div className='clearbutton' style={buttonStyle}>
            <Button variant='text' sx={{width: "100%", height: "100%", color: "white"}} onClick={() => handleClick()}>
                Clear All
            </Button>
        </div>
    </>
  )
}

export default ClearButton