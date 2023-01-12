import './App.css';
import { Counter } from './features/Counter';
import Input from './features/Input';
import Todos from './features/Todos';

function App() {
  return (
    <div >
      <Counter/><br/>
      <Input/>
      <Todos/>
    </div>
  );
}

export default App;
