import { useGameState, useGameDispatch } from "../../context/ChessContext"
import { Color } from "../../type/chess"

export default function ActionConponent () {

    const gameState = useGameState()

    const dispatch = useGameDispatch()

    function handleRotateBoard () {
        return dispatch({
            type: 'ROTATE_BOARD'
        })
    }
        
    return (
        <div>
            <h5>Current player: {Color[gameState.currentPlayer]}</h5>
            <button onClick={ () => handleRotateBoard() }>Перевернуть доску</button>

        </div>
    )
}