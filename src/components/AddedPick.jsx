import React, { useState } from 'react'
import Pick from './Pick.jsx'
import { IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';


const AddedPick = ({ borderColour, brawler , remove, setLoading }) => {
    
    const [isHovered, setHovered] = useState(false);
    const buttonStyle = {
        position: 'absolute',
        top:'-10px',
        right:'-10px',
        padding:'0px',
        backgroundColor:'#1C1C1C',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.2s ease',
        
    }

    const handleClick = () => {
        setLoading(true);
        remove(brawler);
    }
    
    return (
    <>
        <div className='added-pick' onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
            <Pick imageSrc={brawler.image} borderColour={borderColour} />
            <IconButton className='flash' size='small' color='error' style={buttonStyle} onClick={() => handleClick()}>
                <CancelIcon />
            </IconButton>
        </div>
    </>
  )
}

export default AddedPick