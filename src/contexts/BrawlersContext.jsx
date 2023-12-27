import React, { createContext, useContext, useReducer } from 'react';
import { brawlerList } from '../assets/BrawlerList';

const BrawlersContext = createContext();

export const useBrawlersContext = () => {
  return useContext(BrawlersContext);
};

const brawlersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FRIENDLY':
      return {
        ...state,
        brawlers: state.brawlers.filter(brawler => brawler.name !== action.payload.name),
        friendlyBrawlers: [...state.friendlyBrawlers, action.payload],
      };
    case 'ADD_TO_ENEMY':
      return {
        ...state,
        brawlers: state.brawlers.filter(brawler => brawler.name !== action.payload.name),
        enemyBrawlers: [...state.enemyBrawlers, action.payload],
      };
    case 'ADD_TO_BANNED':
      return {
        ...state,
        brawlers: state.brawlers.filter(brawler => brawler.name !== action.payload.name),
        bannedBrawlers: [...state.bannedBrawlers, action.payload],
      };
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
