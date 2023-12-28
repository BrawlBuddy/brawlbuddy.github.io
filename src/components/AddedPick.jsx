import React from 'react'
import Pick from './Pick.jsx'
import { IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const AddedPick = ({ borderColour, brawler}) => {
  return (
    <>
        <div className='added-pick'>
            <Pick imageSrc={brawler.image} borderColour={borderColour} />
            <IconButton size='small' color='error' style={{position: 'absolute', top:'-10px', right:'-10px', padding:'0px', backgroundColor:'#1C1C1C'}}>
                <CancelIcon />
            </IconButton>
        </div>
    </>
  )
}

export default AddedPick