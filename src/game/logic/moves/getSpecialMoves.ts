import { Board, Piece, PieceType, SpecialMove } from "../../../type/chess";
import { getCastlingMoves } from "./special/getCastlingMoves";
import { getEnPassentMoves } from "./special/getEnPassentMoves";

export const getSpecialMoves = (piece: Piece, board: Board): SpecialMove | null => {

    if(piece.type === PieceType.KING) {
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