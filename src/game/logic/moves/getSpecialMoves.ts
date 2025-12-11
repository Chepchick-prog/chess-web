import { Board, GameStatus, Move, Piece, PieceType, Position, SpecialMove } from "../../../type/chess";
import { getCastlingMoves } from "./special/getCastlingMoves";
import { getEnPassentMoves } from "./special/getEnPassentMoves";

export const getSpecialMoves = (piece: Piece, board: Board, status: GameStatus, moveHistory: Move[]): SpecialMove | null => {

    const lastMove = moveHistory[moveHistory.length - 1]

    if(piece.type === PieceType.KING && status === 'playing') {
        return {
            type: 'castling',
            position: getCastlingMoves(piece, board),
        }
    } else if(piece.type === PieceType.PAWN && lastMove) {
        return {
            type: 'enPassent',
            position: getEnPassentMoves(piece, board, lastMove),
        }
    } else {
        return null
    }
}