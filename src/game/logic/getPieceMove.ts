import { Board, Color, GameState, Piece, Position } from "../../type/chess";

export function getPieceMove (state: GameState, newPosition: Position, selectedPiece: Piece): GameState {

    const newBoard = updateBoard (state.board, selectedPiece, newPosition)

    const currentPlayer: Color = selectedPiece.color === 0 ? 1 : 0

    return {...state,
        board: newBoard,
        currentPlayer: currentPlayer,
        selectedPiece: null,
        possibleMoves: [],
        moveHistory: [
            ...state.moveHistory,
            {
                from: selectedPiece.position,
                to: newPosition,
                piece: selectedPiece,
                capturedPiece: state.board[newPosition.row][newPosition.col],
            }
        ],
    }
}

export function updateBoard (board : Board, selectedPiece: Piece, newPosition: Position): Board {

    const prevPosition = selectedPiece.position

    return board.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
            if(rowIndex === prevPosition.row && colIndex === prevPosition.col) {
                return null
            } else if(rowIndex === newPosition.row && colIndex === newPosition.col) {
                return {...selectedPiece,
                    position: {row:rowIndex, col: colIndex},
                    hasMoved: true,
                }
            } else {
                return col
            }
        })
    })
}