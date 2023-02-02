import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Allroutes from './Components/Allroutes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ChakraProvider>
        <Allroutes/>
      </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
