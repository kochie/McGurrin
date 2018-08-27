export const nextChar = (previousKey: string) => ({
  type: "NEXT_CHAR",
  previousKey
});

export const updateWords = (words: string) => ({
  type: "UPDATE_WORDS",
  string: words
});

export const updateRate = (rate: number) => ({
  type: "UPDATE_RATE",
  rate
});

export const incrementTypo = () => ({
  type: "INCREMENT_TYPO"
})

export default () => {};
