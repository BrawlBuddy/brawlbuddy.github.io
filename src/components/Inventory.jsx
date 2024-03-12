import React, { useState, useEffect } from 'react'
import { useBrawlersContext } from '../contexts/BrawlersContext'
import InventoryPick from './InventoryPick';
import { brawlerList } from '../assets/BrawlerList'

const Inventory = ({ search, setSearch, selectedMap, loading, setLoading }) => {

    const { state, dispatch } = useBrawlersContext();
    const [ inventoryDisplay, setInventoryDisplay ] = useState(state.brawlers);

    const updateScores = (brawlers) => {
        dispatch({ type: 'UPDATE_SCORES', payload: brawlers });
    }

    useEffect(() => {
        if (loading) {
            setInventoryDisplay([]);
            return;
        }
        if (search === '') {
            setInventoryDisplay(state.brawlers);
            return;
        }
        const filteredItems = state.brawlers.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
        setInventoryDisplay(filteredItems);
    }, [search, state.brawlers, selectedMap]);

    useEffect(() => {
        if (selectedMap === '' && state.bannedBrawlers.length === 0 && state.friendlyBrawlers.length === 0 && state.enemyBrawlers.length === 0) {
            updateScores(brawlerList);
            setLoading(false);
            return;
        }
        const matchContext = {
            bans: state.bannedBrawlers.map(brawler => brawler.name),
            friendly: state.friendlyBrawlers.map(brawler => brawler.name),
            enemy: state.enemyBrawlers.map(brawler => brawler.name),
            map: selectedMap,
        }
        
        const baseURL = import.meta.env.DEV ? import.meta.env.VITE_API_BASE_URL_DEV : import.meta.env.VITE_API_BASE_URL_PROD;

        fetch(`${baseURL}/brawlerpicks`, {
            method: 'POST',
            body: JSON.stringify(matchContext),
            headers: {
              'Content-Type': 'application/json'
            },
          })
            .then((response) => response.json())
            .then((inventory) => {
                setLoading(false);
                updateScores(inventory);
            }).catch(error => {
                console.error('Error:', error);
                setLoading(false);
                updateScores(state.brawlers);
              });
    }, [selectedMap, state.bannedBrawlers, state.friendlyBrawlers, state.enemyBrawlers]);

    return (
    <>
        <div className='content'>
            <div className='inventoryBox'>
                {inventoryDisplay.map(brawler => (
                    <InventoryPick imageSrc={brawler.image} borderColour='#BCBCBC' brawler={brawler} setSearch={setSearch} key={brawler.name} setLoading={setLoading}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default Inventory