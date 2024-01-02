import React, { useState } from 'react'
import { FormControl } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import { InputLabel } from '@mui/material';
import { mapList } from '../assets/MapList'

const MapSelect = ({ selectedMap, setSelectedMap, setLoading }) => {
  const maps = mapList;
  const handleChange = (event) => {
    setLoading(true);
    setSelectedMap(event.target.value);
  }
    return (
    <>
        <div className='mapSelect'>
            <FormControl variant='filled' sx={{width: '90%'}} >
                <InputLabel id="map-select-label" sx={{color: 'white'}}>Map</InputLabel>
                <Select
                labelId="map-select-label"
                id="map-select"
                value={selectedMap}
                label="Map"
                onChange={(event) => handleChange(event)}
                sx={{color: 'white'}}
                >
                  {maps.map((map) => (
                      <MenuItem value={map.name} key={map.name} >{map.name}</MenuItem>
                  ))}
                </Select>
            </FormControl>
        </div>    
    </>
  )
}

export default MapSelect