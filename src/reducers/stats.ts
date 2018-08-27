const stats = (state = {typing_rate: 0, typos:0}, action) => {
  switch (action.type) {
    case ('UPDATE_RATE'): {
      return ({
        ...state,
        typing_rate: action.rate,
      });
    }
    case ('INCREMENT_TYPO'): {
      return ({
        ...state,
        typos: ++state.typos,
      });
    }
    default: {
      return state;
    }
  }
};

export default stats;
