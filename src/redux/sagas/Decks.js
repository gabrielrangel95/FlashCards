import { call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native'
import { Creators as DecksActions } from '../ducks/Decks';

const uuidv1 = require('uuid/v1');
const initialCards = [
  {
    id: uuidv1(),
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  {
    id: uuidv1(),
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
]


export function* getDecks(action) {
  try {
    const value = yield AsyncStorage.getItem('@FlashCards:CardsList');
    if (value !== null) {
      const cards =  JSON.parse(value);
      console.log(cards)
      yield put(DecksActions.getDecksSuccess(cards))
    }else{
      yield AsyncStorage.setItem('@FlashCards:CardsList', JSON.stringify(initialCards));
      console.log(initialCards)
      yield put(DecksActions.getDecksSuccess(initialCards))
    }
  } catch (error) {
    yield put(DecksActions.getDecksFailure(initialCards))
  }
}
