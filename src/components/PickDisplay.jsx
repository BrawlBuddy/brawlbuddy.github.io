import React, { useState, useEffect } from 'react'
import '../css/main.css'
import Grid from '@mui/material/Grid';
import Pick from './Pick.jsx'
import MapSelect from './MapSelect.jsx'
import { useBrawlersContext } from '../contexts/BrawlersContext'
import AddedPick from './AddedPick.jsx';

const PickDisplay = ({selectedMap, setSelectedMap, setLoading}) => {
    const banColor = '#FFB800'
    const friendlyColor = '#00A3FF'
    const enemyColor = '#F60000'

    const { state, dispatch } = useBrawlersContext();
    const [ bannedDisplay, setBannedDisplay ] = useState(state.bannedBrawlers);
    useEffect(() => {
        setBannedDisplay(state.bannedBrawlers);
        for (let i = 0; i < 6 - state.bannedBrawlers.length; i++) {
            setBannedDisplay(bannedEmpty => [...bannedEmpty, {name: 'empty'}]);
        }
    }, [state.bannedBrawlers]);

    const [ friendlyDisplay, setFriendlyDisplay ] = useState(state.friendlyBrawlers);
    useEffect(() => {
        setFriendlyDisplay(state.friendlyBrawlers);
        for (let i = 0; i < 3 - state.friendlyBrawlers.length; i++) {
            setFriendlyDisplay(friendlyEmpty => [...friendlyEmpty, {name: 'empty'}]);
        }
    }, [state.friendlyBrawlers]);

    const [ enemyDisplay, setEnemyDisplay ] = useState(state.enemyBrawlers);
    useEffect(() => {
        setEnemyDisplay(state.enemyBrawlers);
        for (let i = 0; i < 3 - state.enemyBrawlers.length; i++) {
            setEnemyDisplay(enemyEmpty => [...enemyEmpty, {name: 'empty'}]);
        }
    }, [state.enemyBrawlers]);

    const removeFromBanned = (brawler) => {
        dispatch({ type: 'REMOVE_FROM_BANNED', payload: brawler });
    }
    const removeFromFriendly = (brawler) => {
        dispatch({ type: 'REMOVE_FROM_FRIENDLY', payload: brawler });
    }
    const removeFromEnemy = (brawler) => {
        dispatch({ type: 'REMOVE_FROM_ENEMY', payload: brawler });
    }

    return (
    <>
   
        <div className='content'>
            <MapSelect selectedMap={selectedMap} setSelectedMap={setSelectedMap} setLoading={setLoading} />
            <div className='bangroup'>
                <h2 className='picklabel'>Bans</h2>
                <div className='bans'>
                    {bannedDisplay.map((brawler, index) => (
                        (brawler.name === 'empty') ? (
                            <Pick borderColour={banColor} key={index} />
                        ) : (
                            <AddedPick borderColour={banColor} brawler={brawler} key={brawler.name} remove={removeFromBanned} setLoading={setLoading}/>
                        )
                    ))}
                </div>
            </div>
        </div>

        <div className='content'>
            <div className='pickgroup'>
                <h2 className='picklabel'>Friendly</h2>
                <div className='picks-row-2'>
                    {friendlyDisplay.map((brawler, index) => (
                        (brawler.name === 'empty') ? (
                            <Pick borderColour={friendlyColor} key={index} />
                        ) : (
                            <AddedPick borderColour={friendlyColor} brawler={brawler} key={brawler.name} remove={removeFromFriendly} setLoading={setLoading}/>
                        )
                    ))}
                </div>
            </div>
            <div className='pickgroup'>
                <h2 className='picklabel'>Enemy</h2>
                <div className='picks-row-2'>
                    {enemyDisplay.map((brawler, index) => (
                        (brawler.name === 'empty') ? (
                            <Pick borderColour={enemyColor} key={index} />
                        ) : (
                            <AddedPick borderColour={enemyColor} brawler={brawler} key={brawler.name} remove={removeFromEnemy} setLoading={setLoading}/>
                        )
                    ))}
                </div>
            </div>
            
        </div>
        
    </>
  )
}

export default PickDisplay