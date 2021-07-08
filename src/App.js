import './App.css';
import Active from './component/Active';
import Todos from './component/Todos';

function App() {
  return (
    <div className="App">
      <h1>Active box</h1>
      <Active />
      
      <h1>Todos</h1>
      <Todos />
    </div>
  );
}

export default App;
