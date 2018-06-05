import { call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native'
import { Creators as CardsActions } from '../ducks/Cards';
import { Creators as DecksActions } from '../ducks/Decks';

const uuidv1 = require('uuid/v1');

export function* addCard(action) {
  console.log('entrou');
  try {
    const { card, parentId } = action.payload

    const value = yield AsyncStorage.getItem('@FlashCards:CardsList');
    const decks =  JSON.parse(value);

    const currentDeck = null;

    decks.forEach(deck => {
      if(deck.id == parentId){
        deck.questions.push(card);
        currentDeck = deck;
      }
    });
    yield AsyncStorage.setItem('@FlashCards:CardsList', JSON.stringify(decks));
    yield put(CardsActions.addCardSuccess());
    yield put(DecksActions.selectDeckRequest(currentDeck)); //update current deck
    yield put(DecksActions.getDecksRequest()); //update the list of decks

  } catch (error) {
    yield put(CardsActions.addCardFailure(error))
  }
}


