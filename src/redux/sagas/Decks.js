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
    yield put(DecksActions.getDecksFailure(error))
  }
}

export function* selectDeck(action) {
  try {
    const { deck } = action.payload
    yield put(DecksActions.selectDeckSuccess(deck))

  } catch (error) {
    yield put(DecksActions.selectDeckFailure(error))
  }
}

export function* createDeck(action) {
  console.log(action);
  try {
    const { title } = action.payload
    const value = yield AsyncStorage.getItem('@FlashCards:CardsList');
    const decks =  JSON.parse(value);
    decks.push({
      id: uuidv1(),
      title: title,
      questions: []
    })
    yield AsyncStorage.setItem('@FlashCards:CardsList', JSON.stringify(decks));
    yield put(DecksActions.createDeckSuccess());
    yield put(DecksActions.getDecksRequest()) //atualize decks after add
  } catch (error) {
    yield put(DecksActions.createDeckFailure())
  }
}

