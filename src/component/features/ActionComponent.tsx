import { useGameState, useGameDispatch } from "../../context/ChessContext"
import { Col, Color } from "../../type/chess"

interface ActionComponentProps {
    children: React.ReactNode
}

export const ActionComponent: React.FC<ActionComponentProps> = ({children}) => {

    const gameState = useGameState()

    const dispatch = useGameDispatch()

    function handleRotateBoard () {
        return dispatch({
            type: 'ROTATE_BOARD'
        })
    }
        
    return (
        <div className="chess">
            <div className="vertical">
                <div className="game-info">
                    <h5>Current player: {Color[gameState.currentPlayer]}</h5>
                    <button onClick={ () => handleRotateBoard() }>Перевернуть доску</button>
                </div>
                <div className="horizontal">
                    {children}
                    {/* <div className="history-move">
                        <h5>History Move</h5>
                        <div className="list-move">
                            {gameState.moveHistory.map((move, index) => (
                                <h4 key={index} className="list-item">{`${index + 1}. ${8 - move.to.row}${Col[move.to.col]}`}</h4>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    )
}