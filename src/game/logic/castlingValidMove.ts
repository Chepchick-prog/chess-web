import { Board, Color, Piece, PieceType, Position } from "../../type/chess"
import { isSquareAttacked } from "./isSquareAttacked";

export const castlingValidMove = (king: Piece, board: Board ) => {

    let castlingRights: Position[] = []

    if(king.type !== PieceType.KING || king.hasMoved) {
        return null;
    }

    const color = king.color;
    const row = color === Color.WHITE ? 7 : 0

    if (!canCastleKingSide(color, board, row, king)) {
        castlingRights.push(
            {
                row: row,
                col: 7
            },
            {
                row: row,
                col: 6
            }
        )
    }

    if(!canCastleQueenSide(color, board, row, king)) {
        castlingRights.push(
            {
                row: row,
                col: 0
            },
            {
                row: row,
                col: 2
            }
        )
    }

    return castlingRights

} 

function canCastleKingSide (color: Color, board: Board, row: number, king: Piece):boolean {
    const rook = board[row][7]

    if(!rook || rook.type !== PieceType.ROOK || rook.color !== color || rook.hasMoved) {
        return false;
    }

    const isEmpy = [5, 6].every(col => !board[row][col])

    if(!isEmpy) return false;

    const isSafe = [4, 5, 6].every(col => {
        isSquareAttacked({row, col}, board, king)
    })

    return isSafe;
}

function canCastleQueenSide (color: Color, board: Board, row: number, king: Piece):boolean {

    const rook = board[row][0]

    if(!rook || rook.type !== PieceType.ROOK || rook.color !== color || rook.hasMoved) {
        return false;
    }

    const isEmpy = [1, 2, 3].every(col => !board[row][col])

    if(!isEmpy) return false;

    const isSafe = [2, 3, 4].every(col => {
        isSquareAttacked({row, col}, board, king)
    })

    return isSafe;
}

