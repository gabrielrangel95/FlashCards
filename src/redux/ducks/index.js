import { combineReducers } from 'redux';
import decks from './Decks';
import cards from './Cards';
export default combineReducers({
  decks,
  cards
});
