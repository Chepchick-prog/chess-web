import { Board, Piece, PossibleMoves } from "../../type/chess"

export const getPieceMove = (piece: Piece, board: Board): PossibleMoves => {

    const moveCount = piece.hasMoved ? 1 : 2
    const position = piece.position

    const possibleMoves: PossibleMoves = []

    for(let i = 1; i <= moveCount; i++) {
        
        if(piece.color === 0) {

            const activeSquare = {row: position.row - i, col: position.col}
            
            if((activeSquare.row >= 0 && activeSquare.row <= 7) && (activeSquare.col >= 0 && activeSquare.col <= 7)) {

                const isValid = board[activeSquare.row][activeSquare.col]

                let thisOpponents = [board[position.row - 1][position.col + 1], board[position.row - 1][position.col - 1]]

                thisOpponents = thisOpponents.filter(item => item !== null && item !== undefined)

                if ( isValid === null ) {
                    possibleMoves.push(
                        {
                            row: piece.position.row - i,
                            col: piece.position.col
                        }
                    )

                    thisOpponents.forEach(item => {
                        if((item !== null) && item.color === 1) {
                            possibleMoves.push(
                            {
                                row: item.position.row,
                                col: item.position.col
                            })
                        }
                    })
                    
                } else {
                    thisOpponents.forEach(item => {
                        if((item !== null) && item.color === 1) {
                            possibleMoves.push(
                            {
                                row: item.position.row,
                                col: item.position.col
                            })
                        }
                    })
                }
            }
            
        } else {

            const activeSquare = {row: position.row + i, col: position.col}
            
            if((activeSquare.row >= 0 && activeSquare.row <= 7) && (activeSquare.col >= 0 && activeSquare.col <= 7)) {

                const isValid = board[activeSquare.row][activeSquare.col]

                let thisOpponents = [board[position.row + 1][position.col + 1], board[position.row + 1][position.col - 1]]

                thisOpponents = thisOpponents.filter(item => item !== null && item !== undefined)

                if ( isValid === null ) {
                    possibleMoves.push(
                        {
                            row: piece.position.row + i,
                            col: piece.position.col
                        }
                    )

                    thisOpponents.forEach(item => {
                        if((item !== null) && item.color === 0) {
                            possibleMoves.push(
                            {
                                row: item.position.row,
                                col: item.position.col
                            })
                        }
                    })
                    
                } else {
                    thisOpponents.forEach(item => {
                        if((item !== null) && item.color === 0) {
                            possibleMoves.push(
                            {
                                row: item.position.row,
                                col: item.position.col
                            })
                        }
                    })
                }
            }
        }
    }

    return possibleMoves;
}