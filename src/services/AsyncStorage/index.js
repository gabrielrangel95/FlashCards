import { AsyncStorage } from 'react-native'

const initialCards = [
  {
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
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
]


export async function getCardsList(){
  AsyncStorage.clear();
  try {
    const value = await AsyncStorage.getItem('@FlashCards:CardsList');
    if (value !== null) {
      const cards =  JSON.parse(value);
      return cardsArray;
    }else{
      await AsyncStorage.setItem('@FlashCards:CardsList', JSON.stringify(initialCards));
      return initialCards;
    }
  } catch (error) {
    return error;
  }
}
