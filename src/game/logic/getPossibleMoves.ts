import { Board, Piece, PieceType } from "../../type/chess";

function getPossibleMoves (piece: Piece, board: Board) {

    console.log('piece: ' , piece)
    console.log('board: ' , board)

    const piecePosition = piece.position

    const possibleMoves = []

    if(piece.type === PieceType.PAWN) {
        console.log("this PAWN!")

        const index = piece.hasMoved ? 1 : 2

        for(let i = 1; i <= index; i++) {
            if(piece.color === 0) {

                const isValid = board[piecePosition.row + i][piecePosition.col] === null

                console.log("isValid", isValid)

                let thisOpponents = [board[piecePosition.row + 1][piecePosition.col + 1],board[piecePosition.row + 1][piecePosition.col - 1]]

                if(isValid) {
                    possibleMoves.push(
                    {
                        row: piecePosition.row + i,
                        col: piecePosition.col
                    })

                    thisOpponents.forEach(item => {
                        if(item !== null && item.color === 1) {
                            possibleMoves.push(
                            {
                                row: item.position.row,
                                col: item.position.col
                            })
                        }
                    })

                } else {
                    thisOpponents.forEach(item => {
                        if(item !== null && item.color === 1) {
                            possibleMoves.push(
                            {
                                row: item.position.row,
                                col: item.position.col
                            })
                        }
                    })
                }
            } else {

                const isValid = board[piecePosition.row - 1][piecePosition.col] === null

                console.log("isValid", isValid)

                let thisOpponents = [board[piecePosition.row - 1][piecePosition.col + 1], board[piecePosition.row - 1][piecePosition.col - 1]]

                console.log("thisOpponents", thisOpponents)

                if(isValid) {
                    possibleMoves.push(
                    {
                        row: piecePosition.row - i,
                        col: piecePosition.col
                    })

                    thisOpponents.forEach(item => {
                        if(item !== null && item.color === 0) {
                            possibleMoves.push(
                            {
                                row: item.position.row,
                                col: item.position.col
                            })
                        }
                    })
                    
                } else {
                    thisOpponents.forEach(item => {
                        if(item !== null && item.color === 0) {
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

    if(piece.type === PieceType.KNIGHT) {

        console.log("this KNIGHT!")

        if(piece.color === 0) {
            possibleMoves.push(
            {
                row: piecePosition.row + 2,
                col: piecePosition.col + 1
            },
            {
                row: piecePosition.row + 2,
                col: piecePosition.col - 1
            },
            {
                row: piecePosition.row - 2,
                col: piecePosition.col + 1
            },
            {
                row: piecePosition.row - 2,
                col: piecePosition.col - 1
            },
        )
        } else {
            possibleMoves.push(
             {
                row: piecePosition.row + 2,
                col: piecePosition.col + 1
            },
            {
                row: piecePosition.row + 2,
                col: piecePosition.col - 1
            },
            {
                row: piecePosition.row - 2,
                col: piecePosition.col + 1
            },
            {
                row: piecePosition.row - 2,
                col: piecePosition.col - 1
            },
        )  
        }
    }

    // switch(piece.type) {
    //     case PieceType.BISHOP:
    //         console.log("this BISHOP!")
    //         break;
    //     case PieceType.ROOK:
    //         console.log("this ROOK!")
    //         break;
    //     case PieceType.QUEEN:
    //         console.log("this QUEEN!")
    //         break;
    //     case PieceType.KING:
    //         console.log("this KING!")
    //         break;
    //     default:
    //         console.error("Piece type is not defined")
    // }

    return possibleMoves;
}

export default getPossibleMoves;