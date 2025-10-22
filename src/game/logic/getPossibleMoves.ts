import { Board, Piece, PieceType, PossibleMoves } from "../../type/chess";
import { getBishopMove } from "./getBishopMove";
import { getKingMove } from "./getKingMove";
import { getKnightMove } from "./getKnightMove";
import { getPieceMove } from "./getPieceMove";
import { getQueenMove } from "./getQueenMove";
import { getRookMove } from "./getRookMove";

function getPossibleMoves (piece: Piece, board: Board): PossibleMoves {

    // console.log('piece: ' , piece)
    // console.log('board: ' , board)

    let possibleMoves: PossibleMoves = []

    if(piece.type === PieceType.PAWN) {
        console.log("this PAWN!")

        possibleMoves = getPieceMove(piece, board)
    }

    if(piece.type === PieceType.KNIGHT) {

        console.log("this KNIGHT!")

        possibleMoves = getKnightMove(piece, board)
    }

    if(piece.type === PieceType.BISHOP) {

        console.log("this BISHOP!")

        possibleMoves = getBishopMove(piece, board)
    }

    if(piece.type === PieceType.QUEEN) {

        console.log("this QUEEN!")

        possibleMoves = getQueenMove(piece, board)
    }

    if(piece.type === PieceType.ROOK) {

        console.log("this ROOK!")

        possibleMoves = getRookMove(piece, board)
    }

    if(piece.type === PieceType.KING) {

        console.log("this ROKINGOK!")

        possibleMoves = getKingMove(piece, board)
    }

    return possibleMoves;
}

export default getPossibleMoves;