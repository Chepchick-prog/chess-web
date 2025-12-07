import classNames from "classnames"
import { Col, Piece, Position, SpecialMove } from "../../type/chess"
import PieceComponent from "../piece/PieceComponent"

import '../square/Square.css'
interface SquareProps {
    piece: Piece | null,
    position: Position,
    isPossibleMoves?: boolean,
    isSpecialMove?: boolean,
    isCheck?: boolean,
    onChangeSelect: () => void,
    onChangeMove: () => void,

}

const SquareComponent: React.FC<SquareProps> = ({ piece, position, isPossibleMoves, isCheck, onChangeSelect, onChangeMove, isSpecialMove }) => {
    
    const isDark = (position.row + position.col) % 2 === 1

    const handleMoveClick = () => {
        if(isPossibleMoves || isSpecialMove) {
            return onChangeMove()
        }
        if(piece !== null) {
            return onChangeSelect()
        }

    }
    
    return (
        <div 
            className={classNames('square', {
                ['square--black']: isDark,
                ['square--white']: !isDark,
                ['--isCheck']: isCheck,
                ['squere-piece']: piece !== null,
            })}
            onClick={() => {
                handleMoveClick()
            }}>
            {piece && isSpecialMove && <img className="--possibleMovesPiece" src="./img/possibleMovesPiece-icon.svg" alt="special-move-icon"/>}
            {!piece && isSpecialMove && <img className="--possibleMoves" src="./img/possible-move-icon.png" alt="special-move-icon"/>}
            {piece && isPossibleMoves && <img className="--possibleMovesPiece" src="./img/possibleMovesPiece-icon.png" alt="possible-move-icon"/>}
            {!piece && isPossibleMoves && <img className="--possibleMoves" src="./img/possible-move-icon.png" alt="possible-move-icon"/>}
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

export default SquareComponent;