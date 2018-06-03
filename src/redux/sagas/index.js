import { all, takeLatest } from 'redux-saga/effects';
import { Types as DecksTypes } from '../ducks/Decks';
import { Types as CardTypes } from '../ducks/Cards';

import { getDecks, selectDeck, createDeck } from './Decks';
import { addCard } from './Cards';

export default function* rootSaga() {
  return yield all([
    takeLatest(DecksTypes.GET_DECKS_REQUEST, getDecks),
    takeLatest(DecksTypes.SELECT_DECK_REQUEST, selectDeck),
    takeLatest(DecksTypes.CREATE_DECK_REQUEST, createDeck),

    takeLatest(CardTypes.ADD_CARD_REQUEST, addCard),
  ]);
}
