import { all, takeLatest } from 'redux-saga/effects';
import { Types as DecksTypes } from '../ducks/Decks';
import { getDecks, selectDeck } from './Decks';

export default function* rootSaga() {
  return yield all([
    takeLatest(DecksTypes.GET_DECKS_REQUEST, getDecks),
    takeLatest(DecksTypes.SELECT_DECK_REQUEST, selectDeck),
  ]);
}
