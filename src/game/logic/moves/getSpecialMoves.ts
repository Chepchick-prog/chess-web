import { Board, GameStatus, Piece, PieceType, SpecialMove } from "../../../type/chess";
import { getCastlingMoves } from "./special/getCastlingMoves";
import { getEnPassentMoves } from "./special/getEnPassentMoves";

export const getSpecialMoves = (piece: Piece, board: Board, status: GameStatus): SpecialMove | null => {

    if(piece.type === PieceType.KING && status === 'playing') {
        return {
            type: 'castling',
            position: getCastlingMoves(piece, board),
        }
    } else if(piece.type === PieceType.PAWN) {
        return {
            type: 'en_passent',
            position: getEnPassentMoves(piece, board),
        }
    } else {
        return null
    }
}