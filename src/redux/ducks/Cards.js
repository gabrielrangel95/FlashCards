export const Types = {
  ADD_CARD_REQUEST: 'cards/ADD_CARD_REQUEST',
  ADD_CARD_SUCCESS: 'cards/ADD_CARD_SUCCESS',
  ADD_CARD_FAILURE: 'cards/ADD_CARD_FAILURE',
  OPEN_CARDS_MODAL: 'cards/OPEN_CARDS_MODAL',
  CLOSE_CARDS_MODAL: 'cards/CLOSE_CARDS_MODAL'
};

const initialState = {
  loading: false,
  error: null,
  createCardModalVisible: false,
};

export default function cards(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_CARD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_CARD_SUCCESS:
      return { ...state, loading: false, error: false };
    case Types.ADD_CARD_FAILURE:
      return { ...state, loading: false, error: true };
    case Types.OPEN_CARDS_MODAL:
      return { ...state, createCardModalVisible: true };
    case Types.CLOSE_CARDS_MODAL:
      return { ...state, createCardModalVisible: false };
    default:
      return state;
  }
}

export const Creators = {
  addCardRequest: (card, parentId) => ({
    type: Types.ADD_CARD_REQUEST,
    payload: {
      card,
      parentId
    }
  }),

  addCardSuccess: () => ({
    type: Types.ADD_CARD_SUCCESS,
  }),

  addCardFailure: error => ({
    type: Types.ADD_CARD_FAILURE,
    payload: {
      error,
    },
  }),
  openCardsModal: () => ({
    type: Types.OPEN_CARDS_MODAL,
  }),

  closeCardsModal: () => ({
    type: Types.CLOSE_CARDS_MODAL,
  }),


};
