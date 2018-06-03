export const Types = {
  GET_DECKS_REQUEST: 'decks/GET_DECKS_REQUEST',
  GET_DECKS_SUCCESS: 'decks/GET_DECKS_SUCCESS',
  GET_DECKS_FAILURE: 'decks/GET_DECKS_FAILURE',
};

const initialState = {
  data: [],
  loading: false,
  error: null,
  selected: null,
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
};
