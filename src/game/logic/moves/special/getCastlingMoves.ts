import { Board, Piece, PieceType, Position } from "../../../../type/chess"
import { isSquareAttacked } from "../../isSquareAttacked";

export const getCastlingMoves = (king: Piece, board: Board): Position[] => {
    let castlingMoves: Position[] = []

    if(king.hasMoved) return castlingMoves;

    for(let i = 3; i >= 0; i--) {
        const activeSquare = board[king.position.row][i]
        if(activeSquare === null) {
            continue;
        } else if (activeSquare.type !== null) {
            if(isSquareAttacked(activeSquare.position, board, king)) {
                if(activeSquare.type === PieceType.ROOK && !activeSquare.hasMoved) {
                    castlingMoves = [{...activeSquare.position}, {...activeSquare.position, col: 2}]
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    }

    for(let i = 5; i < 8; i++) {
        const activeSquare = board[king.position.row][i]
        if(activeSquare === null) {
            continue;
        } else if (activeSquare.type !== null) {
            if(isSquareAttacked(activeSquare.position, board, king)) {
                if(activeSquare.type === PieceType.ROOK && !activeSquare.hasMoved) {
                    castlingMoves = [...castlingMoves, {...activeSquare.position}, {...activeSquare.position, col: 6}]
                } else {
                    break;
                }
            } else {
                break;
            }
            
        }
    }
    // .filter(targetPosition => !isSquareAttacked(targetPosition, state.board, action.payload))
    

    console.log(castlingMoves)

    return castlingMoves;
}
