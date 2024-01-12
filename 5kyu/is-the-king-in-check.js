function kingIsInCheck (chessboard) {
    //Plan
    /*Find the King's index position on chessboardCombined (for diagonal checks)
    and find the King's index position on chessboard and use the
    chessboard[index]that the King is on for straight across checks 
    
    Find all the index positions that the pieces on the board can take and see
    if the King's index position is a part of those positions

    const allPiecesPosition = x.postion, y.position, z.position
    if allPiecesPosition.includes(kingsPosition) return true:false
    
    */

    //Errors
    /*Added pawn and knight square functions and kingIsInCheck result tenary.
    Need to fix rook row squares check */
    let chessboardCombined=chessboard[0].concat(chessboard[1],chessboard[2],chessboard[3],chessboard[4],chessboard[5],chessboard[6],chessboard[7])
    
    //If there are no white pieces on the board - return false
    if(chessboardCombined.indexOf('♔')==-1&&chessboardCombined.indexOf('♝')==-1&&chessboardCombined.indexOf('♞')==-1&&chessboardCombined.indexOf('♜')==-1&&chessboardCombined.indexOf('♟')==-1){
        return(false)
    }

    //kingsPosition
    const kingsPosition=chessboardCombined.indexOf('♔')
    console.log(kingsPosition)

    //Finds and returns the array (row) of a piece
    function rowOfPiece(piece){ 
        for (index in chessboard){
            if(chessboard[index].indexOf(piece)!==-1){
                return(index)
            }
        }
    }
    //Finds and returns the index of a piece in their array (row)
    function indexOfPieceInRow(piece){
        return chessboard[rowOfPiece(piece)].indexOf(piece)
    }
    //Find and returns how many indexes are on the left and right
    function howManyLeftAndRight(piece){
        let index = indexOfPieceInRow(piece)
        let leftSquares = index
        let rightSquares = 7 - index
        let result=[leftSquares,rightSquares]
        return result
    }
    //Uses the possible left and right indexes to find all diagonal possible
    //squares, prevents any false positives from being returned
    function allDiagonalPossibleSquares(piece,array,position){
        const leftRight = howManyLeftAndRight(piece)
        for(i=0;i<=leftRight[0];i++){ //left values

            array.push(position+7*i)
            array.push(position-9*i)
        }
        for(i=1;i<=leftRight[1];i++){

            array.push(position-7*i)
            array.push(position+9*i)
        }
    }
    //Find all horizontal and vertical possible squares
    function allHorizontalAndVerticalPossibleSquares(piece,array,position){
        let row = rowOfPiece(piece)
        const tempChessBoard=chessboard
        console.log(tempChessBoard)
        console.log(tempChessBoard[row][tempChessBoard.length-1])
        // console.log(lastIndexOfRow)
        for(index in chessboard[row]){
            array.push(position+8*index)
            array.push(position-8*index)
            // array.push(lastIndexOfRow-index)
        }
        console.log(array)
        return array    
    }

    //If queen sn on the board, find all of queen's possible squares
    let queenPosition=chessboardCombined.indexOf('♛')
    function queen(){
        if(queenPosition!=-1){
            let queenPossibleSquares=[queenPosition]
            allDiagonalPossibleSquares('♛',queenPossibleSquares,queenPosition)
            console.log(queenPossibleSquares)
            return queenPossibleSquares
        }
    }
    //If the bishop is on the board, find all of the bishop's possible squares
    let bishopPosition = chessboardCombined.indexOf('♝')
    function bishop(){
    if(bishopPosition!=-1){
        let bishopPossibleSquares=[bishopPosition]
        if(bishopPosition!=-1){
            let bishopPossibleSquares=[bishopPosition]
            allDiagonalPossibleSquares('♝',bishopPossibleSquares,bishopPosition)
            return(bishopPossibleSquares)
            }
        }
    }
    //If rook is on the board, find all of the rook's possible squares
    
    function rook(){
        let rookPosition = chessboardCombined.indexOf('♜')
        if(rookPosition!=-1){
            let rookPossibleSquares=[rookPosition]
            allHorizontalAndVerticalPossibleSquares('♜',rookPossibleSquares,rookPosition)
            return(rookPossibleSquares)
        }
    }   
    /*Find all Knight squares */
    function knight(){
        let knightPosition = chessboardCombined.indexOf('♞')
        let knightPossibleSquares =[]
            if (knightPosition!=-1){
                knightPossibleSquares.push(knightPosition+15)
                knightPossibleSquares.push(knightPosition+17)
                knightPossibleSquares.push(knightPosition-15)
                knightPossibleSquares.push(knightPosition-17)
                knightPossibleSquares.push(knightPosition-10)
                knightPossibleSquares.push(knightPosition-6)
                knightPossibleSquares.push(knightPosition+6)
                knightPossibleSquares.push(knightPosition+10)
            }
        return knightPossibleSquares
        }
    /*Find all Pawn squares */
    function pawn(){
        let pawnPosition = chessboardCombined.indexOf('♟')
        let pawnPossibleSquares=[]
            if(pawnPosition!=-1){
                pawnPossibleSquares.push(pawnPosition+9)
                pawnPossibleSquares.push(pawnPosition+7)
            }
        return pawnPossibleSquares
        }

    let allPossibleSquares = knight().concat(pawn(),queen(),rook(),knight(),bishop())

    allPossibleSquares = allPossibleSquares.filter(function( element ) {
        return element !== undefined;
     });
    console.log(allPossibleSquares)
    if(allPossibleSquares!=undefined){
        return allPossibleSquares.includes(kingsPosition) ? true:false
    }
}
kingIsInCheck([
//[35, 37, 5, 3, 10, 14, 26, 30]
[' ', ' ', ' ', '3', ' ', '5', ' ', ' '],//[0]  [0]-[7]
[' ', ' ', '0', ' ', ' ', ' ', '4', ' '],//[1]  [8]-[15]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],//[2]  [16]-[23] [20]
[' ', ' ', '6', ' ', ' ', ' ', '0', ' '],//[3]  [24]-[31]
[' ', ' ', '♔', ' ', ' ', '♜', ' ', ' '],//[4]  [32]-[39] [35]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],//[5]  [40]-[47]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],//[6]  [48]-[55]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']])//[7] [56]-[63]

//Data table
//[42, 26, 49, 17, 56, 8, 28, 44, 21, 53, 14, 62, 7, 71]


//'♔' for the black King;
//'♛' - white queen
//'♝' for a white Bishop;
//'♞' for a white Knight;
//'♜' for a white Rook;
//'♟' for a white Pawn;