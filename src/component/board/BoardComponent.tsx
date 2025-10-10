import SquareComponent from "../square/SquareComponent";
import { useGetGameState } from "../../context/ChessContext";

import '../board/Board.css'
import { useReducer } from "react";
import { gameReducer } from "../../game/state/gameReducer";
import { Piece } from "../../type/chess";

function BoardComponent () {

    const { gameState, updateGameState } = useGetGameState()

    const [ state, dispatch ] = useReducer(gameReducer, gameState)

    const handleSelectedPiece = ({...piece}: Piece | null) => {
        
        dispatch({
            type: 'SELECT_PIECE',
            payload: piece,
        })

    }

    return (
        <div className="board">
            {gameState.board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((piece, colIndex) => (
                        <SquareComponent 
                            key={piece?.id || `${rowIndex}-${colIndex}`}
                            piece={piece}
                            position={{row: rowIndex, col: colIndex}}
                            isSelected={state.selectedPiece?.position.row === rowIndex && state.selectedPiece?.position.col === colIndex}
                            onClick={() => handleSelectedPiece(piece)}

                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default BoardComponent;