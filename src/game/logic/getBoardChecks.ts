import { Board, Color, Piece, PieceType, Position } from "../../type/chess";
import { getPossibleMoves } from "./getPossibleMoves";

export function getBoardChecks (board: Board, currentPlayer: Color): Piece[] {

    const checkPieces: Piece[] = []

    for(let i = 0; i <= board.length - 1; i++){
        for(let j = 0; j <= board[i].length - 1; j++) {
            const piece = board[i][j]
            let possibleMoves: Position[] = []
            if(piece !== null && piece.color !== currentPlayer) {
                possibleMoves = getPossibleMoves(piece, board)
                possibleMoves.forEach(item => {
                    if(board[item.row][item.col]?.type === PieceType.KING) {
                        checkPieces.push(piece)
                    }
                })
            }
        }
    }

    return checkPieces
}