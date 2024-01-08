function isSolved(board) {
    // TODO: Check if the board is solved!
    // There are 8 winning combinations in tic-tac-toe. I could iterate throw
    // all of them. For example, if board[2] == 2, then I can check board[5],
    // board[8] and also board[4], board[6] and if either set have values of
    // two, then return 2.

    // However, of course this seems a bit slow, but it can work. Another
    // option, which would be faster would likely be using a Map.

    const combinedBoard=board[0].concat(board[1],board[2])

   
    if(combinedBoard[0]==1 && combinedBoard[1]==1 && combinedBoard[2]==1){ //straight across top
        return(1)
    }
    if(combinedBoard[0]==1 && combinedBoard[4]==1 && combinedBoard[8]==1){ //diagonal top left to bot r
        return(1)
    }
    if(combinedBoard[0]==1 && combinedBoard[3]==1 && combinedBoard[6]==1){ //straight down left side
        return(1)
    }
    if(combinedBoard[1]==1 && combinedBoard[4]==1 && combinedBoard[7]==1){ //straight down middle
        return(1)
    }
    if(combinedBoard[2]==1 && combinedBoard[5]==1 && combinedBoard[8]==1){ //straight down right
        return(1)
    }
    if(combinedBoard[3]==1 && combinedBoard[4]==1 && combinedBoard[5]==1){ //across middle
        return(1)
    }
    if(combinedBoard[6]==1 && combinedBoard[7]==1 && combinedBoard[8]==1){ //across bottom row
        return(1)
    }
    if(combinedBoard[6]==1 && combinedBoard[4]==1 && combinedBoard[2]==1){ //diagonal bottom left to tr
        return(1)
    }

    //All 'O' win conditions (2)
    if(combinedBoard[0]==2 && combinedBoard[1]==2 && combinedBoard[2]==2){ //straight across top
        return(2)
    }
    if(combinedBoard[0]==2 && combinedBoard[4]==2 && combinedBoard[8]==2){ //diagonal top left to bot r
        return(2)
    }
    if(combinedBoard[0]==2 && combinedBoard[3]==2 && combinedBoard[6]==2){ //straight down left side
        return(2)
    }
    if(combinedBoard[1]==2 && combinedBoard[4]==2 && combinedBoard[7]==2){ //straight down middle
        return(2)
    }
    if(combinedBoard[2]==2 && combinedBoard[5]==2 && combinedBoard[8]==2){ //straight down right
        return(2)
    }
    if(combinedBoard[3]==2 && combinedBoard[4]==2 && combinedBoard[5]==2){ //across middle
        return(2)
    }
    if(combinedBoard[6]==2 && combinedBoard[7]==2 && combinedBoard[8]==2){ //across bottom row
        return(2)
    }
    if(combinedBoard[6]==2 && combinedBoard[4]==2 && combinedBoard[2]==2){ //diagonal bottom left to tr
        return(2)
    }



    if(combinedBoard.indexOf(0)== -1){ //if there are no empty spots - return 0 for draw
        return (0)
        
    }
    if(combinedBoard.indexOf(0)!== -1){ //if there are empty spots
        return (-1)
    }
}



// isSolved([[0,0,1],
//           [0,1,0],
//           [1,0,0]])
isSolved([[1,2,1],
          [1,1,2],
          [2,1,2]]) 
    // const map = new Map()
    
    // for(let i=0;i<combinedBoard.length;i++){
    //     map.set(i,combinedBoard[i])
    // }
    // combinedBoard.forEach(((element,index)=>map.set(element,index)))
    // return(map)          