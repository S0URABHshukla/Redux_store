import './App.css';
import Allroutes from './Components/Allroutes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Allroutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
