import { Piece, Board, Position, PieceType } from "../../../type/chess"

export const getKingMove = (piece: Piece, board: Board): Position[] => {

    const position = piece.position

    let possibleMoves: Position[] = []

    // if(!piece.hasMoved) {
    //     for(let i = 1; i < board.length; i++) {

    //         const activeSquare = {row: piece.position.row, col: piece.position.col - i}

    //         console.log(activeSquare)

    //         if(board[activeSquare.row][activeSquare.col] !== null) {
    //             const selectPiece = board[activeSquare.row][activeSquare.col]
    //             if(selectPiece?.type === PieceType.ROOK) {
    //                 possibleMoves.push(
    //                     {
    //                         row: selectPiece.position.row,
    //                         col: selectPiece.position.col
    //                     },
    //                     {
    //                         row: piece.position.row,
    //                         col: piece.position.col - 2
    //                     },
    //                 )
                    
    //             } else {
    //                 console.log("Фигура на пути")
    //                 break;
    //             }
    //         }
    //     }

    //     for(let i = 1; i < board.length; i++) {

    //         const activeSquare = {row: piece.position.row, col: piece.position.col + i}

    //         console.log(activeSquare)

    //         if(board[activeSquare.row][activeSquare.col] !== null) {
    //             const selectPiece = board[activeSquare.row][activeSquare.col]
                
    //             if(selectPiece?.type === PieceType.ROOK) {
    //                 possibleMoves.push(
    //                     {
    //                         row: selectPiece.position.row,
    //                         col: selectPiece.position.col
    //                     },
    //                     {
    //                         row: piece.position.row,
    //                         col: piece.position.col + 2
    //                     },
    //                 )
                    
    //             } else {
    //                 console.log("Фигура на пути")
    //                 break;
    //             }
    //         }
    //     }
    // }

    for(let i = 1; i <= 1; i ++) {

        const activeSquare = {row: position.row - i, col: position.col - i}

        if((activeSquare.row >= 0 && activeSquare.row <= 7) && (activeSquare.col >= 0 && activeSquare.col <= 7)) {
            const isValid = board[activeSquare.row][activeSquare.col]

            if (isValid?.color === piece.color) {
                break;
            } else {
                if (isValid === null) {
                    possibleMoves.push(
                        {
                            row: position.row - i,
                            col: position.col - i
                        },
                    )

                } else {
                    possibleMoves.push(
                        {
                            row: position.row - i,
                            col: position.col - i
                        },
                    )

                    break;
                }
            }
        }

    }

    for(let i = 1; i <= 1; i ++) {

        const activeSquare = {row: position.row + i, col: position.col + i}

        if((activeSquare.row >= 0 && activeSquare.row <= 7) && (activeSquare.col >= 0 && activeSquare.col <= 7)) {
            const isValid = board[activeSquare.row][activeSquare.col]

            if (isValid?.color === piece.color) {
                break;
            } else {
                if (isValid === null) {
                    possibleMoves.push(
                        {
                            row: position.row + i,
                            col: position.col + i
                        },
                    )

                } else {
                    possibleMoves.push(
                        {
                            row: position.row + i,
                            col: position.col + i
                        },
                    )

                    break;
                }
            }
        } 
    }

    for(let i = 1; i <= 1; i ++) {

        const activeSquare = {row: position.row + i, col: position.col - i}

        if((activeSquare.row >= 0 && activeSquare.row <= 7) && (activeSquare.col >= 0 && activeSquare.col <= 7)) {
            const isValid = board[activeSquare.row][activeSquare.col]

            if (isValid?.color === piece.color) {
                break;
            } else {
                if (isValid === null) {
                    possibleMoves.push(
                        {
                            row: position.row + i,
                            col: position.col - i
                        },
                    )
                } else {
                    possibleMoves.push(
                        {
                            row: position.row + i,
                            col: position.col - i
                        },
                    )

                    break;
                }
            }
        }
    }

    for(let i = 1; i <= 1; i ++) {

        const activeSquare = {row: position.row - i, col: position.col + i}

        if((activeSquare.row >= 0 && activeSquare.row <= 7) && (activeSquare.col >= 0 && activeSquare.col <= 7)) {
            const isValid = board[activeSquare.row][activeSquare.col]

            if (isValid?.color === piece.color) {
                break;
            } else {
                if (isValid === null) {
                    possibleMoves.push(
                        {
                            row: position.row - i,
                            col: position.col + i
                        },
                    )
                } else {
                    possibleMoves.push(
                        {
                            row: position.row - i,
                            col: position.col + i
                        },
                    )

                    break;
                }
            }
        }
    }

    for(let i = 1; i <= 1; i ++) {

        const activeSquare = {row: position.row - i, col: position.col}

        if((activeSquare.row >= 0 && activeSquare.row <= 7) && (activeSquare.col >= 0 && activeSquare.col <= 7)) {
            const isValid = board[activeSquare.row][activeSquare.col]

            if (isValid?.color === piece.color) {
                break;
            } else {
                if (isValid === null) {
                    possibleMoves.push(
                        {
                            row: position.row - i,
                            col: position.col,
                        },
                    )
                } else {
                    possibleMoves.push(
                        {
                            row: position.row - i,
                            col: position.col,
                        },
                    )

                    break;
                }
            }
        }
    }

    for(let i = 1; i <= 1; i ++) {

        const activeSquare = {row: position.row + i, col: position.col}

        if((activeSquare.row >= 0 && activeSquare.row <= 7) && (activeSquare.col >= 0 && activeSquare.col <= 7)) {
            const isValid = board[activeSquare.row][activeSquare.col]

            if (isValid?.color === piece.color) {
                break;
            } else {
                if (isValid === null) {
                    possibleMoves.push(
                        {
                            row: position.row + i,
                            col: position.col,
                        },
                    )
                } else {
                    possibleMoves.push(
                        {
                            row: position.row + i,
                            col: position.col,
                        },
                    )

                    break;
                }
            }
        }
    }

    for (let i = 1; i <= 1; i ++) {

        const activeSquare = {row: position.row, col: position.col - i}

        if((activeSquare.row >= 0 && activeSquare.row <= 7) && (activeSquare.col >= 0 && activeSquare.col <= 7)) {
            const isValid = board[activeSquare.row][activeSquare.col]

            if (isValid?.color === piece.color) {
                break;
            } else {
                if (isValid === null) {
                    possibleMoves.push(
                        {
                            row: position.row,
                            col: position.col - i,
                        },
                    )
                } else {
                    possibleMoves.push(
                        {
                            row: position.row,
                            col: position.col - i,
                        },
                    )

                    break;
                }
            }
        }
    }

    for(let i = 1; i <= 1; i ++) {

        const activeSquare = {row: position.row, col: position.col + i}

        if((activeSquare.row >= 0 && activeSquare.row <= 7) && (activeSquare.col >= 0 && activeSquare.col <= 7)) {
            const isValid = board[activeSquare.row][activeSquare.col]

            if (isValid?.color === piece.color) {
                break;
            } else {
                if (isValid === null) {
                    possibleMoves.push(
                        {
                            row: position.row,
                            col: position.col + i,
                        },
                    )
                } else {
                    possibleMoves.push(
                        {
                            row: position.row,
                            col: position.col + i,
                        },
                    )

                    break;
                }
            }
        }
    }

    return possibleMoves
}