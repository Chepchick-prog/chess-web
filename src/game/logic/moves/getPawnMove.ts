import { Board, Piece, Position } from "../../../type/chess"

export const getPawnMove = (piece: Piece, board: Board): Position[] => {

    let moveCount: number = 2;
    piece.hasMoved && (moveCount = 1);
    const position = piece.position
    const possibleMoves: Position[] = []

    for(let i = 1; i <= moveCount; i++) {
        if(piece.color === 0) { 
            const activeSquare = {row: position.row - i, col: position.col}
            const isValid = board[activeSquare.row][activeSquare.col] === null
            const squareAttacked = [board[position.row - 1][position.col + 1], board[position.row - 1][position.col - 1]]
            const thisOpponents = squareAttacked.filter(piece => piece !== null && piece?.color === 1) as Piece[]

            if(!isValid) {
                break;
            } else {
                possibleMoves.push(activeSquare)
            }
            if(thisOpponents.length > 0) {
                thisOpponents.forEach(piece => {
                    possibleMoves.push({row: piece.position.row, col: piece.position.col})
                })
            }
        }
        if(piece.color === 1) {
            const activeSquare = {row: position.row + i, col: position.col}
            const isValid = board[activeSquare.row][activeSquare.col] === null
            const squareAttacked = [board[position.row + 1][position.col + 1], board[position.row + 1][position.col - 1]]
            const thisOpponents = squareAttacked.filter(piece => piece !== null && piece?.color === 0) as Piece[]

            if(!isValid) {
                break;
            } else {
                possibleMoves.push(activeSquare)
            }
            if(thisOpponents.length > 0) {
                thisOpponents.forEach(piece => {
                    possibleMoves.push({row: piece.position.row, col: piece.position.col})
                })
            }
        }
    }

    return possibleMoves;
}