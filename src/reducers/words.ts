const words = (state = { idx: 0 }, action) => {
  switch (action.type) {
    case ('NEXT_CHAR'): {
      return ({
        ...state,
        idx: action.index,
      });
    }
    default: {
      return state;
    }
  }
};

export default words;
