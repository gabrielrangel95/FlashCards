import { combineReducers } from 'redux';
import decks from './Decks';
import cards from './Cards';
import quiz from './Quiz';
export default combineReducers({
  decks,
  cards,
  quiz
});
