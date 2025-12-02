import { Board, Piece, PieceType, Position } from "../../type/chess";
import { getBishopMove } from "./moves/getBishopMove";
import { getKingMove } from "./moves/getKingMove";
import { getKnightMove } from "./moves/getKnightMove";
import { getPawnMove } from "./moves/getPawnMove";
import { getQueenMove } from "./moves/getQueenMove";
import { getRookMove } from "./moves/getRookMove";

export function getPossibleMoves (piece: Piece, board: Board): Position[] {

    let possibleMoves: Position[] = []

    switch(piece.type){
        case PieceType.PAWN:
            possibleMoves = getPawnMove(piece, board);
            break;
        case PieceType.KNIGHT:
            possibleMoves = getKnightMove(piece);
            break;
        case PieceType.BISHOP:
            possibleMoves = getBishopMove(piece, board);
            break;
        case PieceType.ROOK:
            possibleMoves = getRookMove(piece, board);
            break;
        case PieceType.QUEEN:
            possibleMoves = getQueenMove(piece, board);
            break;
        case PieceType.KING:
            possibleMoves = getKingMove(piece, board);
            break;
        default: 
            console.error('Piece type is not defined')
            break;
    }

    possibleMoves = possibleMoves.filter(targetPosition => (targetPosition.row >= 0 && targetPosition.row <= 7) && (targetPosition.col >= 0 && targetPosition.col <= 7))
    possibleMoves = possibleMoves.filter(targetPosition => board[targetPosition.row][targetPosition.col]?.color !== piece.color)

    return possibleMoves;
}