export enum PieceType { PAWN, KNIGHT, BISHOP, ROOK, QUEEN, KING };
export enum Color { WHITE, BLACK };
export type Position = {row: number, col: number}
export type Board = (Piece | null)[][];
export type GameStatus = 'playing' | 'check' | 'checkmate' | 'stelmate'

export interface Piece {
    id: string,
    type: PieceType,
    color: Color,
    position: Position,
    hasMoved?: boolean
}

export interface Move {
    from: Position,
    to: Position,
    piece: Piece,
    capturedPiece?: Piece,
    promotion: PieceType,
    isCheck?: boolean,
    isisCheckmate?: boolean,
}

export interface GameState {
    board: Board,
    currentPlayer: Color,
    selectedPiece: Piece | null,
    possibleMoves: Position[],
    moveHistory: Move[],
    status: GameStatus,
    checkPosition: Position | null,
}

export type GameAction = 
    | { type: 'SELECT_PIECE'; payload: Piece | null }
    | { type: 'MOVE_PIECE'; payload: Position }
    | { type: 'PROMOTE_PAWN'; payload: PieceType }
    | { type: 'RESET_GAME' }