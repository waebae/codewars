function rpsls(pl1,pl2){
    if (pl1 == 'spock'){
        if ( pl2 == 'rock' || pl2 == 'scissors'){
            return('Player 1 Won!')
        }
        else if ( pl2 == 'lizard' || pl2 == 'paper'){
            return('Player 2 Won!')
        }
    }
}