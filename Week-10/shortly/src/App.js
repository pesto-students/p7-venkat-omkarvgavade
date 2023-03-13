import './App.css';
import Shortly from './Components/Shortly';
import {Heading} from '@chakra-ui/react'
function App() {
  return (
    <div className="App">
      <Heading as="h2">Shortly: Url Shortner</Heading>
     <Shortly/>
    </div>
  );
}

export default App;
