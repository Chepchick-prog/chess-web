import React, { createContext, useContext, useReducer } from "react"
import { GameAction, GameState } from "../type/chess"
import { initialGameState } from "../game/state/initialState"
import { gameReducer }  from "../game/state/gameReducer"

const StateContext = createContext<GameState>(initialGameState)
const DispatchContext = createContext<React.Dispatch<GameAction> | undefined>(undefined)

export const useGameState = () => useContext(StateContext)

export const useGameDispatch = () => {
    const context = useContext(DispatchContext);
        
    if(context === undefined) {
        throw new Error('useAppDispatch равен undefined')
    }
    
    return context;
}

function ChessProvider ({children}: {children: React.ReactNode}) {

    const [gameState, dispatch] = useReducer(gameReducer, initialGameState)

    return (
        <StateContext.Provider value={gameState}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}

export default ChessProvider;