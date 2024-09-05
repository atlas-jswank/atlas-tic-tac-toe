import Mascot from "./assets/mascot.png";
import MascotBlue from "./assets/mascot-blue.png";

export function BoardCell({ square, color, onSquareClick }) {
  return (
    <div className={`board-cell ${color}`} onClick={onSquareClick}>
      {square === "X" && <img className="token" src={MascotBlue} />}
      {square === "O" && <img className="token" src={Mascot} />}
    </div>
  );
}
