import BoardComponent from './component/board/BoardComponent';
import ActionConponent from './component/features/ActionComponent';
import ChessProvider from './context/ChessContext';
import './style/global.css';

function App() {

  return (
    <main>
      <ChessProvider>
        <ActionConponent/>
        <BoardComponent/>
      </ChessProvider>
    </main>
  );
}

export default App;
