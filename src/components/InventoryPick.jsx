import React from 'react'
import Pick from './Pick.jsx'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useBrawlersContext } from '../contexts/BrawlersContext'
import { Typography } from '@mui/material';

const InventoryPick = ({ borderColour, brawler, setSearch, setLoading }) => {
  
    const banColor = '#FFB800'
    const friendlyColor = '#00A3FF'
    const enemyColor = '#F60000'
    const { state, dispatch } = useBrawlersContext();
    const addToFriendly = (brawler) => {
        if (state.friendlyBrawlers.length === 3) {
            return;
        }
        setLoading(true);
        dispatch({ type: 'ADD_TO_FRIENDLY', payload: brawler });
        setSearch('');
    };
    const addToEnemy = (brawler) => {
        if (state.enemyBrawlers.length === 3) {
            return;
        }
        setLoading(true);
        dispatch({ type: 'ADD_TO_ENEMY', payload: brawler });
        setSearch('');
    };
    const addToBanned = (brawler) => {
        if (state.bannedBrawlers.length === 6) {
            return;
        }
        setLoading(true);
        dispatch({ type: 'ADD_TO_BANNED', payload: brawler });
        setSearch('');
    };
    return (
    <>
        <div className='inventory-pick'>
            <Pick imageSrc={brawler.image} borderColour={borderColour} />
            <h4 style={{color: "white"}}>
                Score: {brawler.score === -1 ? 0 : brawler.score}
            </h4>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                <Button size='small' color='primary' onClick={() => addToFriendly(brawler)}>F</Button>
                <Button size='small' color='warning' onClick={() => addToBanned(brawler)}>B</Button>
                <Button size='small' color='error' onClick={() => addToEnemy(brawler)}>E</Button>
            </ButtonGroup>
        </div>
        
    </>
  )
}

export default InventoryPick