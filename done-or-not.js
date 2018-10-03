const doneOrNot = (board) => {
  const isComplete = (arr) => arr.every(el => el >= 1 && el <= arr.length);
  const isUnique = (arr) => new Set(arr).size === arr.length;
  const isValid = (arr) => isComplete(arr) && isUnique(arr);

  const columns = board.map((row, index) => row.map((_, i) => board[i][index]));

  const grids = [];
  for (let i = 0; i < board.length; i++) {
    if ((i - 1) % 3 === 0) {
      const previousRow = board[i - 1];
      const row = board[i];
      const nextRow = board[i + 1];
      grids.push([
        previousRow[i - 1], previousRow[i], previousRow[i + 1],
        row[i - 1], row[i], row[i + 1],
        nextRow[i - 1], nextRow[i], nextRow[i + 1]
      ]);
    }
  }

  return board.every(row => isValid(row)) &&
    columns.every(column => isValid(column)) &&
    grids.every(grid => isValid(grid));
}

console.log(doneOrNot([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], // 0
  [6, 7, 2, 1, 9, 5, 3, 4, 8], // 1
  [1, 9, 8, 3, 4, 2, 5, 6, 7], // 2 -> end of grid
  [8, 5, 9, 7, 6, 1, 4, 2, 3], // 3
  [4, 2, 6, 8, 5, 3, 7, 9, 1], // 4
  [7, 1, 3, 9, 2, 4, 8, 5, 6], // 5 -> end of grid
  [9, 6, 1, 5, 3, 7, 2, 8, 4], // 6
  [2, 8, 7, 4, 1, 9, 6, 3, 5], // 7
  [3, 4, 5, 2, 8, 6, 1, 7, 9]  // 8 -> end of grid
]), true);

console.log(doneOrNot([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 9],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]), false);

console.log(doneOrNot([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [9, 1, 2, 3, 4, 5, 6, 7, 8]]
), false);