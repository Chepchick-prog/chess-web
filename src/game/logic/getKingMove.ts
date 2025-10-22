import { Board, Piece, PossibleMoves } from "../../type/chess"

export const getKingMove = (piece: Piece, board: Board): PossibleMoves => {

    const position = piece.position

    let possibleMoves: PossibleMoves = []


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
    // console.log(possibleMoves)

    return possibleMoves
}