import Header from './components/Header/Header.jsx';
import TodoForm from './components/Form/TodoForm.jsx';
import Todos from './components/Todos/Todos.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
