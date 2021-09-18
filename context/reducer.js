import * as actionTypes from './actionTypes';

export const initialState = {
  navClicked: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NAV_CLICKED:
      return { ...state, navClicked: !state.navClicked };
    default:
      return state;
  }
};

export default reducer;
