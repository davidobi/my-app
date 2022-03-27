import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import CardEvent from './CardEvent';

function App() {
  return ( 
    <div className="App">
      < CardEvent />
      <Card name = 'Tony' />
    </div>
  );
}

export default App;
