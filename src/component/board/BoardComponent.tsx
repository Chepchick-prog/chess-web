import SquareComponent from "../square/SquareComponent";

import '../board/Board.css'
import { Piece, PieceType, Position } from "../../type/chess";
import { useGameState, useGameDispatch } from "../../context/ChessContext";
import { useModalStore } from "../modal/model/store";

function BoardComponent () {

    const gameState = useGameState()
    const dispatch = useGameDispatch()
    const {showModal} = useModalStore()

    const handleSelectedPiece = ({...piece}: Piece) => {
        dispatch({
            type: 'SELECT_PIECE',
            payload: piece
        })
    }

    const handleMovePiece = ({...position}: Position) => {
        
        if(gameState.selectedPiece?.type === PieceType.PAWN && (position.row === 0 || position.row === 7)) {
            showModal('promote', gameState.selectedPiece)
        }

        dispatch({
            type: 'MOVE_PIECE',
            payload : position
        })

    }

    const possibleMoves = (rowIndex: number, colIndex: number): boolean => {

        let isActive: boolean = false
        
        gameState.possibleMoves.map(item => {
            if((item.row === rowIndex) && (item.col === colIndex)) {
                return  isActive = true
            } else {
                return isActive
            }
        })

        return isActive
    }

    const specialMoves = (rowIndex: number, colIndex: number): boolean => {

        let isActive: boolean = false
        
        gameState.specialMoves?.position.map(item => {
            if((item.row === rowIndex) && (item.col === colIndex)) {
                return  isActive = true
            } else {
                return isActive
            }
        })

        return isActive
    }

    function changeCheck (piece: Piece | null): boolean {

        let isActive: boolean = false

        if (piece !== null) {
            if(piece.type === PieceType.KING && piece.color === gameState.currentPlayer && gameState.status === 'check') {
                return isActive = true
            } else {
                return isActive
            }
        }

        return isActive
    }

    console.log(gameState)

    return (
        <div className="board">
            {gameState.board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((piece, colIndex) => (
                        <SquareComponent
                            key={piece?.id || `${rowIndex}-${colIndex}`}
                            piece={piece}
                            position={{row: rowIndex, col: colIndex}}
                            isPossibleMoves={possibleMoves(rowIndex, colIndex)}
                            isSpecialMove={specialMoves(rowIndex, colIndex)}
                            isCheck={changeCheck(piece)}
                            onChangeSelect={() => piece && handleSelectedPiece(piece)}
                            onChangeMove={() => handleMovePiece({row: rowIndex, col: colIndex})}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default BoardComponent;