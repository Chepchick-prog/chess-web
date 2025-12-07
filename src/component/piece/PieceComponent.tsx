import { Piece, PieceType, Position, Color } from "../../type/chess";
import '../piece/Piece.css'


interface PieceProps {
    piece: Piece;
    position?: Position;
}


const PieceComponent: React.FC<PieceProps> = ({piece}) => {

    return (
        <div className="piece">
            <img src={getPieceSimbol(piece)} alt="piece." />
        </div>
    )
}

function getPieceSimbol (piece: Piece) :string {
    const whitePiece = {
        [PieceType.KING]: "./img/piece/king-w.png",
        [PieceType.QUEEN]: "./img/piece/queen-w.png",
        [PieceType.ROOK]: "./img/piece/rook-w.png",
        [PieceType.BISHOP]: "./img/piece/bishop-w.png",
        [PieceType.KNIGHT]: "./img/piece/knight-w.png",
        [PieceType.PAWN]: "./img/piece/pawn-w.png",
    }

    const blackPiece = {
        [PieceType.KING]: "./img/piece/king-b.png",
        [PieceType.QUEEN]: "./img/piece/queen-b.png",
        [PieceType.ROOK]: "./img/piece/rook-b.png",
        [PieceType.BISHOP]: "./img/piece/bishop-b.png",
        [PieceType.KNIGHT]: "./img/piece/knight-b.png",
        [PieceType.PAWN]: "./img/piece/pawn-b.png",
    }

    return piece.color === Color.WHITE
        ? whitePiece[piece.type]
        : blackPiece[piece.type]
}

export default PieceComponent;