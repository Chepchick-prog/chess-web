import { useState, createContext, useContext, useCallback, useMemo } from "react"
import { GameState } from "../type/chess"
import { initialGameState } from "../game/state/initialState"

const ChessContext = createContext<GameStateValue>({
    gameState: initialGameState,
    updateGameState: () => {}
})

export const useGetGameState = () => useContext(ChessContext)

interface ChessContextProps {
    children: React.ReactElement;
}

interface GameStateValue {
    gameState: GameState,
    updateGameState?: (state: GameState) => void,
}

function ChessProvider ({children}: ChessContextProps) {

    const [gameState, setGameState] = useState<GameState>(initialGameState)

    const updateGameState = useCallback((state: GameState) => {
        setGameState(state);
    }, [])

    const gameStateValue = useMemo(() => ({
        gameState,
        updateGameState
    }), [gameState, updateGameState])

    return (
        <ChessContext.Provider value={gameStateValue}>
            {children}
        </ChessContext.Provider>
    )
}

export default ChessProvider;