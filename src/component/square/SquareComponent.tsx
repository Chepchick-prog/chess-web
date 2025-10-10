import { Piece, Position } from "../../type/chess"
import PieceComponent from "../piece/PieceComponent"


import '../square/Square.css'

interface SquareProps {
    piece: Piece | null,
    position: Position,
    isSelected: boolean,
    onClick: () => void,

}

const SquareComponent: React.FC<SquareProps> = ({ piece, position, isSelected, onClick }) => {
    
    const isDark = (position.row + position.col) % 2 === 1

    const squareClass = `
        square
        ${isDark ? 'square--black' : 'square--white'}
        ${isSelected && 'square--selected'}
        ${piece && 'squere-piece'}

    `.trim();

    return (
        <div 
            className={squareClass}
            onClick={() => piece && onClick()}
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