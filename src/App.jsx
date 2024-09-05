import { BoardCell } from "./BoardCell";
import { useGameState } from "./useGameState";

export default function App() {
  const { square, colors, winner, handleClick, reset } = useGameState();

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        <div className="board-row">
          <BoardCell
            color={colors[0]}
            square={square[0]}
            onSquareClick={() => handleClick(0)}
          />
          <BoardCell
            color={colors[1]}
            square={square[1]}
            onSquareClick={() => handleClick(1)}
          />
          <BoardCell
            color={colors[2]}
            square={square[2]}
            onSquareClick={() => handleClick(2)}
          />
        </div>
        <div className="board-row">
          <BoardCell
            color={colors[3]}
            square={square[3]}
            onSquareClick={() => handleClick(3)}
          />
          <BoardCell
            color={colors[4]}
            square={square[4]}
            onSquareClick={() => handleClick(4)}
          />
          <BoardCell
            color={colors[5]}
            square={square[5]}
            onSquareClick={() => handleClick(5)}
          />
        </div>
        <div className="board-row">
          <BoardCell
            color={colors[6]}
            square={square[6]}
            onSquareClick={() => handleClick(6)}
          />
          <BoardCell
            color={colors[7]}
            square={square[7]}
            onSquareClick={() => handleClick(7)}
          />
          <BoardCell
            color={colors[8]}
            square={square[8]}
            onSquareClick={() => handleClick(8)}
          />
        </div>
      </div>
      {winner && <button onClick={reset}>New Game</button>}
    </div>
  );
}
