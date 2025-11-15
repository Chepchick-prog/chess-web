import { Board, Color, GameState, Piece, Position } from "../../type/chess";
import { getBoardChecks } from "./getBoardChecks";

export function getPieceMove (state: GameState, newPosition: Position, selectedPiece: Piece): GameState {

    const newBoard = updateBoard (state.board, selectedPiece, newPosition)

    const currentPlayer: Color = selectedPiece.color === 0 ? 1 : 0

    const checkPieces: Piece[] = getBoardChecks(newBoard, currentPlayer)

    const isCheck: boolean = checkPieces.length > 0

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
                isCheck: isCheck,
            }
        ],
        status: isCheck ? 'check' : "playing",
        checkPieces: checkPieces,
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