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
    /*Added Diagonal check for blocked pieces
    Added Vertical check for blocked pieces
    
    
    Code does not currently test for multiples of the same pieces
    Need to Fix Pawn Algo - false positive pushes when on the left and right
    side of the board
    Nedd to Fix Rook Algo - false positive pushes due to algo working from left
    to right
    
    Plan:
    Find all the squares on chessboardCombined for all the pieces, put them into
    array
    Add a function called isThereAPieceInTheWay
    -This function will stop pushing any further indexes if that index value
    shares the value with any pieces on the board.
    */

    let chessboardCombined=chessboard[0].concat(chessboard[1],chessboard[2],chessboard[3],chessboard[4],chessboard[5],chessboard[6],chessboard[7])
    
    //If there are no white pieces on the board - return false
    if(chessboardCombined.indexOf('♔')==-1&&chessboardCombined.indexOf('♝')==-1&&chessboardCombined.indexOf('♞')==-1&&chessboardCombined.indexOf('♜')==-1&&chessboardCombined.indexOf('♟')==-1){
        return(false)
    }

    //kingsPosition
    const kingsPosition=chessboardCombined.indexOf('♔')
    console.log(kingsPosition)
    //allOtherPiecesPosition
    function allOtherPiecesPositionPush(){
        const allOtherPiecesPosition = []
        allOtherPiecesPosition.push(chessboardCombined.indexOf('♛'))
        allOtherPiecesPosition.push(chessboardCombined.indexOf('♝'))
        allOtherPiecesPosition.push(chessboardCombined.indexOf('♜'))
        allOtherPiecesPosition.push(chessboardCombined.indexOf('♞'))
        allOtherPiecesPosition.push(chessboardCombined.indexOf('♟'))
        return allOtherPiecesPosition
    }
    const allOtherPiecesPosition=allOtherPiecesPositionPush()
    console.log(allOtherPiecesPosition)
    
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
        let nextSquare = 0
        //bottomLeft
        for(i=1;i<=8;i++){
            nextSquare = position+7*(i)
            if(allOtherPiecesPosition.includes(nextSquare)==false){
                array.push(position+7*(i))
            }
            if (allOtherPiecesPosition.includes(nextSquare)){
                break   
            }
        }
        //topLeft
        for(i=1;i<=8;i++){
            nextSquare = position-9*(i)


            if(allOtherPiecesPosition.includes(nextSquare)==false){

                array.push(position-9*(i))
            }
            if (allOtherPiecesPosition.includes(nextSquare)){
                break   
            }
        }
        //bottomRight
        for(i=1;i<=8;i++){
            nextSquare = position+9*(i)


            if(allOtherPiecesPosition.includes(nextSquare)==false){

                array.push(position+9*(i))
            }
            if (allOtherPiecesPosition.includes(nextSquare)){
                break   
            }
        }

        //topRight
        for(i=1;i<=8;i++){
            nextSquare = position-7*(i)
            if(allOtherPiecesPosition.includes(nextSquare)==false){

                array.push(position-7*(i))
            }
            if (allOtherPiecesPosition.includes(nextSquare)){
                break   
            }
        }
        return array
    }
    //Find all horizontal and vertical possible squares
    function allHorizontalAndVerticalPossibleSquares(piece,array,position){

        //Find the last index of the row where the piece is located.
        let row = rowOfPiece(piece)
        const tempChessBoard=chessboard
        tempChessBoard[row][tempChessBoard.length-1]='last'
        tempChessBoard[row][0]='first'
        const tempChessBoardCombined=tempChessBoard[0].concat(tempChessBoard[1],tempChessBoard[2],tempChessBoard[3],tempChessBoard[4],tempChessBoard[5],tempChessBoard[6],tempChessBoard[7])
        //After inserting 'temp' to the last idnex of the row on the combined
        //board, count back 8 squares
        let lastIndexOfRow=tempChessBoardCombined.indexOf('last')
        let firstIndexOfRow=tempChessBoardCombined.indexOf('first')
        // console.log(lastIndexOfRow)

        // Going Up Vertical Squares
        let nextSquare=0
        for(i=1;i<7;i++){
            nextSquare=position-8*i
            if(allOtherPiecesPosition.includes(nextSquare)==false){
                array.push(position-8*i)
            }
            if(allOtherPiecesPosition.includes(nextSquare)==true){
                break
            }
        }
        // Going Down Vertical Squares
        /* Find the position of all the pieces on the row
        If the position of the King is less than the rook, count from right
        If the position of the King is great than the rook*/ 
        for(i=1;i<7;i++){
            nextSquare=position+8*i
            if(allOtherPiecesPosition.includes(nextSquare)==false){
                array.push(position+8*i)
            }
            if(allOtherPiecesPosition.includes(nextSquare)==true){
                break
            }
        }
        //Going Left Across Row
        /*If the King's position is greater than the rooks, we start counting at the
        rook and go right on the row, including all left tiles until we hit something

        If the King's postion is less than the rooks, start at the rook, and go left,
        including all right tiles until we hit something*/

        const kingsRowPosition = chessboard[row].indexOf('♔')
        
        if(kingsRowPosition<chessboard.indexOf([row][piece])){//if the King is to the left of the rook
            for(i=0;i<8;i++){                
                let tempAllOtherPiecesPosition=allOtherPiecesPosition.filter((x)=> x!=position)
                // console.log(tempAllOtherPiecesPosition)
                // console.log(lastIndexOfRow-i)
                if(tempAllOtherPiecesPosition.includes(lastIndexOfRow-i)==false){
                    array.push(lastIndexOfRow-i)
                }
                if(tempAllOtherPiecesPosition.includes(lastIndexOfRow-i)==true){
                    break
                }
            }
        }
        console.log(kingsRowPosition)
        console.log(chessboard[row][piece])
        if(kingsRowPosition>chessboard.indexOf([row][piece])){//if the King is to the right of the rook
            
            for(i=0;i<8;i++){                
                let tempAllOtherPiecesPosition=allOtherPiecesPosition.filter((x)=> x!=position)
                // console.log(tempAllOtherPiecesPosition)
                // console.log(lastIndexOfRow-i)
                if(tempAllOtherPiecesPosition.includes(firstIndexOfRow+i)==false){
                    array.push(firstIndexOfRow+i)
                }
                if(tempAllOtherPiecesPosition.includes(firstIndexOfRow+i)==true){
                    break
                }
        }
        
        
        }
      
        console.log(array)
        return array    
    }
    
    //If queen is  on the board, find all of queen's possible squares
    let queenPosition=chessboardCombined.indexOf('♛')
    function queen(){
        if(queenPosition!=-1){
            let queenPossibleSquares=[queenPosition]
            allDiagonalPossibleSquares('♛',queenPossibleSquares,queenPosition)
            allHorizontalAndVerticalPossibleSquares('♛',queenPossibleSquares,queenPosition)
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
            // isThereAPieceInTheWay('♜',rookPossibleSquares,rookPosition,rook)
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
        // console.log(allPossibleSquares.includes(kingsPosition))
        return allPossibleSquares.includes(kingsPosition) ? true:false
    }


}
kingIsInCheck([
//[35, 37, 5, 3, 10, 14, 26, 30]
[' ', ' ', ' ', '3', ' ', '5', ' ', ' '],//[0]  [0]-[7]
[' ', ' ', '0', ' ', ' ', ' ', '4', ' '],//[1]  [8]-[15]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],//[2]  [16]-[23] [18]
['♜', '♞', '♔', ' ', ' ', ' ', ' ', ' '],//[3]  [24]-[31]
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],//[4]  [32]-[39] [35]
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