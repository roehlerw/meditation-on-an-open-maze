import { Container, Header } from 'semantic-ui-react'
import './App.css';
import GameGrid from './components/game-grid';

function App() {
  return (
    <div className="App">
      <Container textAlign='center'>
        <Header as='h2'>Meditation on an Open Maze</Header>
        <GameGrid rows={10} cols={10} />
      </Container>
    </div>
  );
}

export default App;
