import { Board, Piece, PieceType, Position } from "../../type/chess";
import { isSquareAttacked } from "./isSquareAttacked";
import { getBishopMove } from "./moves/getBishopMove";
import { getKingMove } from "./moves/getKingMove";
import { getKnightMove } from "./moves/getKnightMove";
import { getPawnMove } from "./moves/getPawnMove";
import { getQueenMove } from "./moves/getQueenMove";
import { getRookMove } from "./moves/getRookMove";

export function getPossibleMoves (piece: Piece, board: Board, checkPieces: Piece[] = []): Position[] {

    let possibleMoves: Position[] = []

    switch(piece.type){
        case PieceType.PAWN:
            possibleMoves = getPawnMove(piece, board);
            break;
        case PieceType.KNIGHT:
            possibleMoves = getKnightMove(piece, board);
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
    
    if(checkPieces.length > 0) {

        possibleMoves = possibleMoves.filter(targetPosition => {

            return !isSquareAttacked(targetPosition, board, piece)
        })
    }

    return possibleMoves;
}