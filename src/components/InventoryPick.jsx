import React from 'react'
import Pick from './Pick.jsx'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useBrawlersContext } from '../contexts/BrawlersContext'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        ban: {
            main: '#FFB800',
        },
        friendly: {
            main: '#00A3FF',
        },
        enemy: {
            main: '#F60000',
        },
    },
  });

const InventoryPick = ({ borderColour, brawler, setSearch, setLoading }) => {
  
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
        <ThemeProvider theme={theme}>
            <div className='inventory-pick fadeIn'>
                <Pick imageSrc={brawler.image} borderColour={borderColour} />
                <h4 style={{color: "white"}}>
                    Score: {brawler.score === -1 ? "" : brawler.score.toFixed(2)}
                </h4>
                <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                    <Button size='small' color='friendly' onClick={() => addToFriendly(brawler)}>F</Button>
                    <Button size='small' color='ban' onClick={() => addToBanned(brawler)}>B</Button>
                    <Button size='small' color='enemy' onClick={() => addToEnemy(brawler)}>E</Button>
                </ButtonGroup>
            </div>
        </ThemeProvider>
    </>
  )
}

export default InventoryPick