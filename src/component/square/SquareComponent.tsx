import { Col, Piece, Position } from "../../type/chess"
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
            {piece && isPossibleMoves && <img className="--possibleMovesPiece" src="/img/possibleMovesPiece-icon.png" alt="possible-move-icon"/>}
            {!piece && isPossibleMoves && <img className="--possibleMoves" src="/img/possible-move-icon.png" alt="possible-move-icon"/>}
            {piece && (
                <PieceComponent
                    piece={piece}
                    position={position}
                />
            )}
            {position.col === 7 && <h4 className="row-index">{8 - position.row}</h4>}
            {position.row === 7 && <h4 className="col-index">{Col[position.col]}</h4>}
            
        </div>
    )
}

export default SquareComponent