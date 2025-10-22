import { GameAction, GameState, Piece, Board } from "../../type/chess";
import getNewBoard from "../logic/getNewBoard";
import getPossibleMoves from "../logic/getPossibleMoves";

export function gameReducer ( state: GameState, action: GameAction ): GameState {

    let selectedPiece: Piece;

    if(action.type === "SELECT_PIECE") {

        if(state.currentPlayer === action.payload.color) {

            selectedPiece = action.payload

            if(state.selectedPiece?.id === action.payload?.id) {
                return {
                    ...state,
                    selectedPiece: null,
                    possibleMoves: []}
            } else {
                const newPossibleMoves = getPossibleMoves(action.payload, state.board)

                return {
                    ...state,
                    selectedPiece: selectedPiece,
                    possibleMoves: newPossibleMoves,
                }
            }
        } else {
            console.error("This piece not currentPlayer")
        }
    }

    if(action.type === "MOVE_PIECE") {

        let board: Board = []

        if(state.selectedPiece !== null) {
            board = getNewBoard(state.board, action.payload, state.selectedPiece)
        }

        return {
            ...state,
            board: board,
            selectedPiece: null,
            possibleMoves:[],
            currentPlayer: state.currentPlayer === 0 ? 1 : 0,
            moveHistory: []
        }
    }
    

    switch(action.type) {
        case 'PROMOTE_PAWN':
            return state
        case 'RESET_GAME':
            return state;
        case 'ROTATE_BOARD':
            const newBoard = state.board.map(row => {
                return row.reverse()
            })

            newBoard.reverse()

            return {
                ...state,
                board: newBoard,
            }
        default:
            return state
    }
} 