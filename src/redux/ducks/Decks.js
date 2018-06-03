export const Types = {
  GET_DECKS_REQUEST: 'decks/GET_DECKS_REQUEST',
  GET_DECKS_SUCCESS: 'decks/GET_DECKS_SUCCESS',
  GET_DECKS_FAILURE: 'decks/GET_DECKS_FAILURE',
  SELECT_DECK_REQUEST: 'decks/SELECT_DECK_REQUEST',
  SELECT_DECK_SUCCESS: 'decks/SELECT_DECK_SUCCESS',
  SELECT_DECK_FAILURE: 'decks/SELECT_DECK_FAILURE',
  CREATE_DECK_REQUEST: 'decks/CREATE_DECK_REQUEST',
  CREATE_DECK_SUCCESS: 'decks/CREATE_DECK_SUCCESS',
  CREATE_DECK_FAILURE: 'decks/CREATE_DECK_FAILURE',
  OPEN_MODAL: 'decks/OPEN_MODAL',
  CLOSE_MODAL: 'decks/CLOSE_MODAL'
};

const initialState = {
  data: [],
  loading: false,
  error: null,
  selected: null,
  createModalVisible: false,
};

export default function decks(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case Types.GET_DECKS_REQUEST:
      return { ...state, loading: true };
    case Types.GET_DECKS_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload.decksArray };
    case Types.GET_DECKS_FAILURE:
      return { ...state, loading: false, error: true };
    case Types.SELECT_DECK_REQUEST:
      return { ...state, loading: true };
    case Types.SELECT_DECK_SUCCESS:
      return { ...state, loading: false, error: false, selected: action.payload.deck };
    case Types.SELECT_DECK_FAILURE:
      return { ...state, loading: false, error: true };
    case Types.CREATE_DECK_REQUEST:
      return { ...state, loading: true };
    case Types.CREATE_DECK_SUCCESS:
      return { ...state, loading: false, error: false };
    case Types.CREATE_DECK_FAILURE:
      return { ...state, loading: false, error: true };
    case Types.OPEN_MODAL:
      return { ...state, createModalVisible: true };
    case Types.CLOSE_MODAL:
      return { ...state, createModalVisible: false };

    default:
      return state;
  }
}

export const Creators = {
  getDecksRequest: () => ({
    type: Types.GET_DECKS_REQUEST,
  }),

  getDecksSuccess: decksArray => ({
    type: Types.GET_DECKS_SUCCESS,
    payload: {
      decksArray,
    },
  }),

  getDecksFailure: error => ({
    type: Types.GET_DECKS_FAILURE,
    payload: {
      error,
    },
  }),

  selectDeckRequest: deck => ({
    type: Types.SELECT_DECK_REQUEST,
    payload: {
      deck,
    },
  }),

  selectDeckSuccess: deck => ({
    type: Types.SELECT_DECK_SUCCESS,
    payload: {
      deck,
    },
  }),

  selectDeckFailure: error => ({
    type: Types.SELECT_DECK_FAILURE,
    payload: {
      error,
    },
  }),

  createDeckRequest: title => ({
    type: Types.CREATE_DECK_REQUEST,
    payload: {
      title,
    },
  }),

  createDeckSuccess: () => ({
    type: Types.CREATE_DECK_SUCCESS,
  }),

  createDeckFailure: error => ({
    type: Types.CREATE_DECK_FAILURE,
    payload: {
      error,
    },
  }),

  openModal: () => ({
    type: Types.OPEN_MODAL,
  }),

  closeModal: () => ({
    type: Types.CLOSE_MODAL,
  }),
};
