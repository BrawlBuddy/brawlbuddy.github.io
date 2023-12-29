import React, { createContext, useContext, useReducer } from 'react';
import { brawlerList } from '../assets/BrawlerList';

const BrawlersContext = createContext();

export const useBrawlersContext = () => {
  return useContext(BrawlersContext);
};

const brawlersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FRIENDLY':
        if (state.friendlyBrawlers.length < 3) {
            return {
                ...state,
                brawlers: state.brawlers.filter(brawler => brawler.name !== action.payload.name),
                friendlyBrawlers: [...state.friendlyBrawlers, action.payload],
            };
        } else {
            return state;
        }  
    case 'ADD_TO_ENEMY':
        if (state.enemyBrawlers.length < 3) {
            return {
                ...state,
                brawlers: state.brawlers.filter(brawler => brawler.name !== action.payload.name),
                enemyBrawlers: [...state.enemyBrawlers, action.payload],
            };
        } else {
            return state;
        }  
    case 'ADD_TO_BANNED':
        if (state.bannedBrawlers.length < 6) {
            return {
                ...state,
                brawlers: state.brawlers.filter(brawler => brawler.name !== action.payload.name),
                bannedBrawlers: [...state.bannedBrawlers, action.payload],
            };
        } else {
            return state;
        }
    case 'REMOVE_FROM_FRIENDLY':
      return {
        ...state,
        brawlers: [...state.brawlers, action.payload],
        friendlyBrawlers: state.friendlyBrawlers.filter(brawler => brawler.name !== action.payload.name),
      };
    case 'REMOVE_FROM_ENEMY':
      return {
        ...state,
        brawlers: [...state.brawlers, action.payload],
        enemyBrawlers: state.enemyBrawlers.filter(brawler => brawler.name !== action.payload.name),
      };
    case 'REMOVE_FROM_BANNED':
      return {
        ...state,
        brawlers: [...state.brawlers, action.payload],
        bannedBrawlers: state.bannedBrawlers.filter(brawler => brawler.name !== action.payload.name),
      };
    case 'UPDATE_SCORES':
      const brawlerDict = {};
      state.brawlers.forEach(brawler => {
        brawlerDict[brawler.name] = brawler;
      });
      const updatedBrawlers = action.payload.map(brawler => {
        if (brawlerDict[brawler.name]) {
          return {name: brawler.name, score: brawler.score, image: brawlerDict[brawler.name].image};
        } else {
          return brawler;
        }
      });
      return {
        ...state,
        brawlers: updatedBrawlers,
      };
    default:
      return state;
  }
};

export const BrawlersProvider = ({ children }) => {
  const initialState = {
    brawlers: brawlerList,
    friendlyBrawlers: [],
    enemyBrawlers: [],
    bannedBrawlers: [],
  };

  const [state, dispatch] = useReducer(brawlersReducer, initialState);

  return (
    <BrawlersContext.Provider value={{ state, dispatch }}>
      {children}
    </BrawlersContext.Provider>
  );
};
