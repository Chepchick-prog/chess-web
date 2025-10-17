import { GameAction, GameState, Piece, Board } from "../../type/chess";
import getNewBoard from "../logic/getNewBoard";
import getPossibleMoves from "../logic/getPossibleMoves";

export function gameReducer ( state: GameState, action: GameAction ): GameState {

    let selectedPiece: Piece;

    if(action.type === "SELECT_PIECE") {
        selectedPiece = action.payload

        if(state.selectedPiece?.id === action.payload?.id) {
            return {
                ...state,
                selectedPiece: null,
                possibleMoves: []}
        } else {
            const possibleMoves = getPossibleMoves(action.payload, state.board)

            return {
                ...state,
                selectedPiece: selectedPiece,
                possibleMoves: possibleMoves,
            }
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
            possibleMoves:[]
        }
    }
    

    switch(action.type) {
        case 'PROMOTE_PAWN':
            return state
        case 'RESET_GAME':
            return state
        default:
            return state;
    }
} 