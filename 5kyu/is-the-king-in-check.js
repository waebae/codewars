function kingIsInCheck (chessboard) {
    //Plan
    /*Plot the King's position on chessboardCombined (for diagonal checks) and
    plot the King's position on chessboard and use the chessboard[index] that
    the King is on for straight across checks */

    //Errors
    /*Fix the diagonal check, it is returning false values because the
    algorithm is not suitable.
    
    My solution right now is to find on the chessboard[index], how many squares
    are to the left and right of the diagonal, and perform two separate push
    conditional based on the amount of squares on left and right*/

    //I make a concat chessboard array so that I can use its 0-63 index to more
    //easily find where pieces are
    let chessboardCombined=chessboard[0].concat(chessboard[1],chessboard[2],chessboard[3],chessboard[4],chessboard[5],chessboard[6],chessboard[7])
    
    //If there are no white pieces on the board - return false
    if(chessboardCombined.indexOf('♛')==-1&&chessboardCombined.indexOf('♝')==-1&&chessboardCombined.indexOf('♞')==-1&&chessboardCombined.indexOf('♜')==-1&&chessboardCombined.indexOf('♟')==-1){
        console.log(false)
    }

    /*Find the row of the piece
    If the piece is a queen or rook, check that row for a King, return check
    If the piece is a queen or bishop, check the diagonal, not sure how I'm
    going to do that yet*/
    function rowOfPiece(piece){ 
        for (index in chessboard){
            if(chessboard[index].indexOf(piece)!==-1){
                console.log(index)
        }
        }
    }

    function indexOfPieceinRow(){

    }
    //If queen in on the board, find all of queen's possible squares
    let queenPosition=chessboardCombined.indexOf('♛')
    if(queenPosition!=-1){
        let queenPossibleSquares=[]
        for(let i=1;i<4;i++){
            queenPossibleSquares.push(queenPosition+9*i)
            queenPossibleSquares.push(queenPosition-9*i)
            queenPossibleSquares.push(queenPosition+7*i)
            queenPossibleSquares.push(queenPosition-7*i)
        }
        console.log(queenPosition)
        console.log(queenPossibleSquares)
    }
    //If the bishop is on the board, find all of the bishop's possible squares
    let bishopPosition = chessboardCombined.indexOf('♟')

    if(bishopPosition!=-1){
        let bishopPossibleSquares=[]
        for(let i=1;i<4;i++){
            bishopPossibleSquares.push(bishopPosition+9*i)
            bishopPossibleSquares.push(bishopPosition-9*i)
            bishopPossibleSquares.push(bishopPosition+7*i)
            bishopPossibleSquares.push(bishopPosition-7*i)
        }
        console.log(bishopPosition)
        console.log(bishopPossibleSquares)
    }

    /* Check digaonals for King 
    First find the row and column of King i.e [4][2]
    Then push an array with all the diagonal squares that bishop and queen can
    go
    If King's index matches one in the array, return check*/

    rowOfPiece('♔')
    console.log(chessboard[4].indexOf('♔'))


    
    console.log(typeof(chessboard))
    console.log(typeof(chessboard[4][2]))

}
kingIsInCheck([

['♔', ' ', ' ', ' ', ' ', ' ', ' ', ' '],//[0]  [0]-[7]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],//[1]  [8]-[15]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],//[2]  [16]-[23]
[' ', ' ', ' ', ' ', '♛', ' ', ' ', ' '],//[3]  [24]-[31]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', '♟'],//[4]  [32]-[39] [30][21][12][3]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],//[5]  [40]-[47]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],//[6]  [48]-[55]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']])//[7] [56]-[63]

//Data table

//'♔' for the black King;
//'♛' - white queen
//'♝' for a white Bishop;
//'♞' for a white Knight;
//'♜' for a white Rook;
//'♟' for a white Pawn;