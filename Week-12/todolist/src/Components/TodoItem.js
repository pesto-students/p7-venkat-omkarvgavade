import React from "react";
import { Box, Flex, Checkbox ,Heading} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import axios from "axios";
function TodoItem({todo,handleGetTodosData}) {
  const handleToggleTask=(id)=>{
    let payload={
      ...todo,
      isCompleted:!todo.isCompleted
    }
    axios.patch("http://localhost:3004/todos/"+id,payload).then((response)=>
        handleGetTodosData()
    )
  }
  const handleDeleteTodo=(id)=>{
    axios.delete("http://localhost:3004/todos/"+id).then((response)=>{
      handleGetTodosData()
    })
  }
  return (
    <Flex
      boxShadow="1px 1px 6px -3px black"
      w="100%"
      p="2rem"
      alignItems="center"
    >
      <Box w="10%">
        <Checkbox onChange={()=>{
          handleToggleTask(todo.id)
        }} size='lg' defaultChecked={todo.isCompleted}></Checkbox>
      </Box>
      <Box w="80%" paddingLeft="1rem" textAlign="start">
        <Heading as='h3' color={todo.isCompleted ? "green":"blue"} size='md'>{todo.title}</Heading>
      </Box>
      <Box w="10%">
        <IconContext.Provider value={{ color: 'blue', size: '25px' }}>
          <AiFillDelete onClick={()=>{
            handleDeleteTodo(todo.id)
          }}/>
        </IconContext.Provider>
      </Box>
    </Flex>
  );
}

export default TodoItem;
