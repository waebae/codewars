function seatsInTheater(nCols, nRows, col, row) {
  totalSeats=nCols * nRows
  column=col-1
  columnsBlocked=nCols-column
  rowsBlocked=nRows-row
  seatsBlocked=columnsBlocked*rowsBlocked
  return seatsBlocked 
}