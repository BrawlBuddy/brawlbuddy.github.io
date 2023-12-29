import React, { useState, useEffect } from 'react'
import { useBrawlersContext } from '../contexts/BrawlersContext'
import InventoryPick from './InventoryPick';
import { brawlerList } from '../assets/BrawlerList'
import CircularProgress from '@mui/material/CircularProgress';

const Inventory = ({ search, setSearch, selectedMap, loading, setLoading }) => {
    
    const inventoryBox = {
        width: '970px',
        height: '350px',
        borderRadius: '5px',
        backgroundColor: '#282828',
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gridGap: '10px',
        overflow: 'auto',
        padding: '10px',
    }

    const { state, dispatch } = useBrawlersContext();
    const [ inventoryDisplay, setInventoryDisplay ] = useState(state.brawlers);

    const updateScores = (brawlers) => {
        dispatch({ type: 'UPDATE_SCORES', payload: brawlers });
    }

    useEffect(() => {
        if (search === '') {
            setInventoryDisplay(state.brawlers);
            //wait for the inventory to be displayed before updating scores
            setTimeout(() => {
                setLoading(false);
            }
            , 100);
            return;
        }
        const filteredItems = state.brawlers.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
        setInventoryDisplay(filteredItems);
        setLoading(false);
    }, [search, state.brawlers]);

    useEffect(() => {
        if (selectedMap === '' && state.bannedBrawlers.length === 0 && state.friendlyBrawlers.length === 0 && state.enemyBrawlers.length === 0) {
            updateScores(brawlerList)
            return;
        }
        const matchContext = {
            bans: state.bannedBrawlers.map(brawler => brawler.name),
            friendly: state.friendlyBrawlers.map(brawler => brawler.name),
            enemy: state.enemyBrawlers.map(brawler => brawler.name),
            map: selectedMap,
        }
        console.log(matchContext);
        
        fetch("http://localhost:8080/brawlerpicks", {
            method: 'POST',
            body: JSON.stringify(matchContext),
            headers: {
              'Content-Type': 'application/json'
            },
          })
            .then((response) => response.json())
            .then((inventory) => {
                console.log(inventory);
                updateScores(inventory);
            }).catch(error => {
                console.error('Error:', error);
              });
    }, [selectedMap, state.bannedBrawlers, state.friendlyBrawlers, state.enemyBrawlers]);

    return (
    <>
        <div className='content'>
            <div style={inventoryBox}>
                {loading ? <CircularProgress/> : inventoryDisplay.map(brawler => (
                    <InventoryPick imageSrc={brawler.image} borderColour='#BCBCBC' brawler={brawler} setSearch={setSearch} key={brawler.name} setLoading={setLoading}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default Inventory