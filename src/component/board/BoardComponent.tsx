import SquareComponent from "../square/SquareComponent";

import '../board/Board.css'
import { Piece, Position } from "../../type/chess";
import { useGameState, useGameDispatch } from "../../context/ChessContext";

function BoardComponent () {

    const gameState = useGameState()
    const dispatch = useGameDispatch()

    const handleSelectedPiece = ({...piece}: Piece) => {
        dispatch({
            type: 'SELECT_PIECE',
            payload: piece
        })
    }

    const handleMovePiece = ({...position}: Position) => {
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
                            isSelected={gameState.selectedPiece?.position.row === rowIndex && gameState.selectedPiece?.position.col === colIndex}
                            isPossibleMoves={possibleMoves(rowIndex, colIndex)}
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