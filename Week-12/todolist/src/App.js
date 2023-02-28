import './App.css';
import Todo from './Components/Todo';
import { Heading ,Box} from '@chakra-ui/react';
function App() {
  return (
    <div className="App">
      <Box p="1rem">
      <Heading>Todo App</Heading>
      </Box>
      
      <Todo/>
    </div>
  );
}

export default App;
