import { Board, Piece, Position } from "../../type/chess";

function getNewBoard (board: Board, position: Position, selectedPiece: Piece): Board {

    const prevPosition = selectedPiece.position

    // console.log(board, position, selectedPiece)

    const newBoard = board.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
            if(rowIndex === prevPosition.row && colIndex === prevPosition.col) {
                return null
            } else if(rowIndex === position.row && colIndex === position.col) {
                return {...selectedPiece,
                    position: {row:rowIndex, col: colIndex},
                    hasMoved: true,
                }
            } else {
                return col
            }
        })
    })

    return newBoard
}

export default getNewBoard;