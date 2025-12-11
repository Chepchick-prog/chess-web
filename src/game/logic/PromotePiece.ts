import { Board, Piece, PieceType, Position } from "../../type/chess"

export const PromotePiece = (board: Board, piece: Piece, promotion: PieceType, newPosition: Position) => {

    return board.map((row, index) => {
        return row.map((col, colIndex) => {
            if(index === newPosition.row && colIndex === newPosition.col) {
                return {
                    ...piece,
                    id: `promote-${piece.color}-${PieceType[promotion]}-${colIndex}`,
                    type: promotion,
                    position: newPosition,
                }
            }
            return col
        })
    } )
}