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
    /*Improved diagonal check algorithm as per last commit, but discovered that
    left and right squares are an inadequate check. However this does not seem
    to break the code, since the King can't be off the board anyway - so program
    will not return any inaccurate booleans*/

    //I make a concat chessboard array so that I can use its 0-63 index to more
    //easily find where pieces are
    let chessboardCombined=chessboard[0].concat(chessboard[1],chessboard[2],chessboard[3],chessboard[4],chessboard[5],chessboard[6],chessboard[7])
    
    //If there are no white pieces on the board - return false
    if(chessboardCombined.indexOf('♛')==-1&&chessboardCombined.indexOf('♝')==-1&&chessboardCombined.indexOf('♞')==-1&&chessboardCombined.indexOf('♜')==-1&&chessboardCombined.indexOf('♟')==-1){
        return(false)
    }

    //kingsPosition
    const kingsPosition=chessboardCombined.indexOf('♛')
    // console.log(kingsPosition)

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
    //Uses the possible left and right indexes to find all possible squares,
    //prevents any false positives from being returned
    function allPossibleSquares(piece,array,position){
        const leftRight = howManyLeftAndRight(piece)
        for(i=0;i<=leftRight[0];i++){ //left values
            console.log(leftRight[0])
            array.push(position+7*i)
            array.push(position-9*i)
        }
        for(i=1;i<=leftRight[1];i++){
            console.log(leftRight[1])
            array.push(position-7*i)
            array.push(position+9*i)
        }
    }

    //If queen in on the board, find all of queen's possible squares
    let queenPosition=chessboardCombined.indexOf('♛')
    if(queenPosition!=-1){
        let queenPossibleSquares=[queenPosition]
        allPossibleSquares('♛',queenPossibleSquares,queenPosition)
        console.log(queenPosition)
        console.log(queenPossibleSquares)
    }
    //If the bishop is on the board, find all of the bishop's possible squares
    let bishopPosition = chessboardCombined.indexOf('♟')

    if(bishopPosition!=-1){
        let bishopPossibleSquares=[]
        for(let i=1;i<4;i++){
            bishopPossibleSquares.push(bishopPosition+9*i) //bot right
            bishopPossibleSquares.push(bishopPosition-9*i) //top left
            bishopPossibleSquares.push(bishopPosition+7*i) //bot left
            bishopPossibleSquares.push(bishopPosition-7*i) //top right
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
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],//[3]  [24]-[31]
[' ', ' ', ' ', '♛', ' ', ' ', ' ', '♟'],//[4]  [32]-[39] [30][21][12][3]
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