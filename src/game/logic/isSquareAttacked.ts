import { Board, Piece, Position } from "../../type/chess"
import { getBoardChecks } from "./getBoardChecks"
import { updateBoard } from "./getPieceMove"

export const isSquareAttacked = (position: Position, board: Board, piece: Piece ):boolean => {

    const virtualBoard = updateBoard(board, piece, position)

    const checkPieces = getBoardChecks(virtualBoard, piece.color)

    const kingIsAfterCheck: boolean = checkPieces.length > 0

    return kingIsAfterCheck
}