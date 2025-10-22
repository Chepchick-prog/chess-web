import { Board, Piece, PossibleMoves } from "../../type/chess"

export const getKnightMove = (piece: Piece, board: Board): PossibleMoves => {

    let possibleMoves: PossibleMoves = [
        {
            row: piece.position.row + 2,
            col: piece.position.col + 1
        },
        {
            row: piece.position.row + 2,
            col: piece.position.col - 1
        },
        {
            row: piece.position.row - 2,
            col: piece.position.col + 1
        },
        {
            row: piece.position.row - 2,
            col: piece.position.col - 1
        },
        {
            row: piece.position.row - 1,
            col: piece.position.col - 2
        },
        {
            row: piece.position.row - 1,
            col: piece.position.col + 2
        },
        {
            row: piece.position.row + 1,
            col: piece.position.col - 2,
        },
        {
            row: piece.position.row + 1,
            col: piece.position.col + 2,
        },
        

    ]

    possibleMoves = possibleMoves.filter(item => (item.row >= 0 && item.row <= 7) && (item.col >= 0 && item.col <= 7))

    possibleMoves = possibleMoves.filter(item => board[item.row][item.col]?.color !== piece.color)

    return possibleMoves
}