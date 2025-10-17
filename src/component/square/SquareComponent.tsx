import { Piece, Position } from "../../type/chess"
import PieceComponent from "../piece/PieceComponent"


import '../square/Square.css'

interface SquareProps {
    piece: Piece | null,
    position: Position,
    isSelected: boolean,
    isPossibleMoves: boolean,
    onChangeSelect: () => void,
    onChangeMove: () => void,

}

const SquareComponent: React.FC<SquareProps> = ({ piece, position, isSelected = false, isPossibleMoves, onChangeSelect, onChangeMove }) => {
    
    const isDark = (position.row + position.col) % 2 === 1

    const squareClass = `
        square
        ${isDark ? 'square--black' : 'square--white'}
        ${isSelected && 'square--selected'}
        ${isPossibleMoves && 'square--possibleMoves'}
        ${piece && 'squere-piece'}

    `.trim();

    return (
        <div 
            className={squareClass}
            onClick={() => {
                piece && onChangeSelect()
                isPossibleMoves && onChangeMove()
            }}
            >
            {piece && (
                <PieceComponent
                    piece={piece}
                    position={position}
                />
            )}
        </div>
    )
}

export default SquareComponent