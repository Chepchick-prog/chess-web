import BoardComponent from './component/board/BoardComponent';
import ChessProvider from './context/ChessContext';
import './style/global.css';

function App() {
  return (
    <main>
      <ChessProvider>
        <BoardComponent/>
      </ChessProvider>
    </main>
  );
}

export default App;
