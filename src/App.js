import TodoApp from './components/TodoApp';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      <TodoApp />
    </div>
    </>
  );
}

export default App;
