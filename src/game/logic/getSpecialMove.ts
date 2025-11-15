import { Board, Piece, PieceType, Position } from "../../type/chess";

export function getSpecialMove (piece: Piece, board: Board): Position[] {

    if(piece.type === PieceType.KING && piece.hasMoved === false) {

        for(let i = 0; i < board.length; i ++) {
            for(let j = 0; j < board[i].length; j++) {
                if(board[i][j]?.type === PieceType.ROOK && board[i][j]?.hasMoved === false) {
                    
                }
            }
        }
    }

    return []
}