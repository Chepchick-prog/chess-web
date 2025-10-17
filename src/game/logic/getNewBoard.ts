import { Board, Piece, Position } from "../../type/chess";

function getNewBoard (board: Board, position: Position, selectedPiece: Piece): any {

    const prevPosition = selectedPiece.position

    // console.log(board, position, selectedPiece)

    const newBoard = board.map((row, rowIndex) => {

        if(position.row === rowIndex) {
            return row.map((col, colIndex) => {
                if (position.col === colIndex) {
                    return {...selectedPiece,
                        position: {row:rowIndex, col: colIndex},
                        hasMoved: true,
                    }
                } else {
                    return col
                }
            })
        } else if(prevPosition.row === rowIndex) {
            return row.map((col, colIndex) => {
                if (prevPosition.col === colIndex) {
                    return null
                } else {
                    return col
                }
            })
        } else {
            return row;
        }
    })

    return newBoard
}

export default getNewBoard;