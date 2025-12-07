import { Board, GameState, Piece, Position } from "../../type/chess"
import { CastlingMove } from "./CastlingMove";

export const SpecialMovePiece = (state: GameState, position: Position, piece: Piece): GameState => {

    let board: Board = {...state.board};

    if(state.specialMoves?.type === 'castling') {
        board = CastlingMove(state.board, position)
    }

    return {...state,
        board: board,
        currentPlayer: piece.color === 0 ? 1 : 0,
        selectedPiece: null,
        possibleMoves: [],
        specialMoves: null,
    }
}