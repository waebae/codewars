function kingIsInCheck (chessboard) {


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

['♔', ' ', ' ', ' ', ' ', ' ', ' ', ' '],//[0]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],//[1]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],//[2]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],//[3]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', '♛'],//[4]  //[4][4]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],//[5]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],//[6]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']])//[7]

//Data table

//'♔' for the black King;
//'♛' - white queen
//'♝' for a white Bishop;
//'♞' for a white Knight;
//'♜' for a white Rook;
//'♟' for a white Pawn;