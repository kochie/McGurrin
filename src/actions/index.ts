let index = 0;

export const nextChar = (length) => {
  index += 1;
  return ({
    type: 'NEXT_CHAR',
    index: (index) % length,
  });
};

export const updateRate = (rate) => ({
    type: "UPDATE_RATE",
    rate,
  });

export default () => {};
