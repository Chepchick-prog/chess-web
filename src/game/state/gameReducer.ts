import { GameAction, GameState, Move, Piece, Position } from "../../type/chess";
import { castlingValidMove } from "../logic/castlingValidMove";
import { getPieceMove } from "../logic/getPieceMove";
import { getPossibleMoves } from "../logic/getPossibleMoves";

export function gameReducer ( state: GameState, action: GameAction ): GameState {

    let selectedPiece: Piece;

    if(action.type === "SELECT_PIECE") {

        if(state.currentPlayer === action.payload.color) {

            selectedPiece = action.payload

            if(state.selectedPiece?.id === action.payload?.id) {
                return {
                    ...state,
                    selectedPiece: null,
                    possibleMoves: [],
                    // castlingRights: null
                }
            } else {
                let newPossibleMoves: Position[] = getPossibleMoves(action.payload, state.board, state.checkPieces)

                // const newCastlingRights = castlingValidMove(selectedPiece, state.board)

                return {
                    ...state,
                    selectedPiece: selectedPiece,
                    possibleMoves: newPossibleMoves,
                    moveHistory: [...state.moveHistory],
                    // castlingRights: newCastlingRights,
                }
            }
        } else {
            console.error("This piece not currentPlayer")
        }
    }

    if(action.type === "MOVE_PIECE") {

        if (!state.selectedPiece) return state;

        let newState: GameState = {...state}

        newState = getPieceMove(state, action.payload, state.selectedPiece)
        
        return newState
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