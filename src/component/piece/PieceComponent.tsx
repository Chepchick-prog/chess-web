import { Piece, PieceType, Position, Color } from "../../type/chess";
import '../piece/Piece.css'


interface PieceProps {
    piece: Piece;
    position?: Position;
}


const PieceComponent: React.FC<PieceProps> = ({piece}) => {

    return (
        <div className="piece">
            {getPieceSimbol(piece)}
        </div>
    )
}

function getPieceSimbol (piece: Piece) :string {
    const whiteSimbol = {
        [PieceType.KING]: '♔',
        [PieceType.QUEEN]: '♕',
        [PieceType.ROOK]: '♖',
        [PieceType.BISHOP]: '♗',
        [PieceType.KNIGHT]: '♘',
        [PieceType.PAWN]: '♙',
    }

    const blackSimbol = {
        [PieceType.KING]: '♚',
        [PieceType.QUEEN]: '♛',
        [PieceType.ROOK]: '♜',
        [PieceType.BISHOP]: '♝',
        [PieceType.KNIGHT]: '♞',
        [PieceType.PAWN]: '♟',
    }

    return piece.color === Color.WHITE
        ? whiteSimbol[piece.type]
        : blackSimbol[piece.type]
}

export default PieceComponent;