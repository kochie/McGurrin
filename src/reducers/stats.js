const stats = (state = {}, action) => {
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
        typo: action.typo,
      });
    }
    default: {
      return state;
    }
  }
};

export default stats;
