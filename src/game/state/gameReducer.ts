import { GameAction, GameState, Piece, Position } from "../../type/chess";
import { getBoardChecks } from "../logic/getBoardChecks";
import { getPieceMove } from "../logic/getPieceMove";
import { getPossibleMoves } from "../logic/getPossibleMoves";
import { getStatusGame } from "../logic/getStatusGame";
import { isSquareAttacked } from "../logic/isSquareAttacked";
import { getSpecialMoves } from "../logic/moves/getSpecialMoves";
import { SpecialMovePiece } from "../logic/SpecialMovePiece";
import { initialGameState } from "./initialState";

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
                    specialMoves: null,
                }
            } else {
                let newPossibleMoves: Position[] = getPossibleMoves(action.payload, state.board)
                newPossibleMoves = newPossibleMoves.filter(targetPosition => !isSquareAttacked(targetPosition, state.board, action.payload))
                const specialMoves = getSpecialMoves(action.payload, state.board, state.status, state.moveHistory)

                console.log('specialMoves', specialMoves)
                return {
                    ...state,
                    selectedPiece: selectedPiece,
                    possibleMoves: newPossibleMoves,
                    moveHistory: [...state.moveHistory],
                    specialMoves: specialMoves,
                }
            }
        } else {
            console.error("This piece not currentPlayer")
        }
    }

    if(action.type === "MOVE_PIECE") {

        if (!state.selectedPiece) return state;

        let newState: GameState = {...state}

        if(state.specialMoves?.position.some(position => position.row === action.payload.row && position.col === action.payload.col)) {
            newState = SpecialMovePiece(state, action.payload, state.selectedPiece)
        } else {
            newState = getPieceMove(state, action.payload, state.selectedPiece)
        }

        const checkPieces = getBoardChecks(newState.board, newState.currentPlayer)
        
        return {...newState, 
            status: getStatusGame(newState.board, newState.currentPlayer, checkPieces),
            checkPieces: checkPieces,
            specialMoves: null,
        }
    }

    switch(action.type) {
        case 'PROMOTE_PAWN':
            return state
        case 'RESET_GAME':
            return initialGameState;
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