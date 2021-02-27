export const initialField = Array(9).fill(null);

export const initialState = {
  fields: [],
  nextFieldsStore: [],
  winner: null,
};

export const checkWinner = (links, lastMove, fieldsLength) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of winningCombinations) {
    if (!combination.includes(lastMove)) continue;
    if (
      links[combination[0]] === links[combination[1]] &&
      links[combination[0]] === links[combination[2]]
    ) {
      return fieldsLength % 2 ? 'O' : 'X';
    }
  }
  if (!links.includes(null)) {
    return 'Nobody';
  }
  return null;
};
