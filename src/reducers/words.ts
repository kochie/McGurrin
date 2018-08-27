const words = (state = { idx: 0, string: "", previousKey: "" }, action) => {
  switch (action.type) {
    case ('NEXT_CHAR'): {
      return ({
        ...state,
        idx: ++state.idx % state.string.length,
        previousKey: action.previousKey
      });
    }
    case ('UPDATE_WORDS'): {
      return ({
        ...state,
        string: action.string,
        idx: 0
      });
    }
    default: {
      return state;
    }
  }
};

export default words;
