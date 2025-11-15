import BoardComponent from './component/board/BoardComponent';
import { ActionComponent } from './component/features/ActionComponent';
import ChessProvider from './context/ChessContext';
import './style/global.css';

function App() {

  return (
    <main>
      <ChessProvider>
        <ActionComponent>
          <BoardComponent/>
        </ActionComponent>
      </ChessProvider>
    </main>
  );
}

export default App;
