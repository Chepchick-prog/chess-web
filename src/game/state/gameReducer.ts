import { GameAction, GameState } from "../../type/chess";

export function gameReducer ( state: GameState, action: GameAction ): GameState {


    switch(action.type) {
        case 'SELECT_PIECE':
            if(state.selectedPiece?.id === action.payload?.id) {
                return {...state, selectedPiece: null}
            } else {
                return {...state, selectedPiece: action.payload}
            }
        case 'MOVE_PIECE':
            return state
        case 'PROMOTE_PAWN':
            return state
        case 'RESET_GAME':
            return state
        default:
            return state;
    }
} 