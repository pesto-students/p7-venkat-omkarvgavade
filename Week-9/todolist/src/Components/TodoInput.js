import React from "react";
import {Input, Button, Box,Flex } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
function TodoInput({todos,handleGetTodosData}) {
  const [task,setTask]=useState("");

  const handleInputChange = (event)=>{
     setTask(event.target.value)
  }
  const handleAddTodo=()=>{
     let payload = {
      title:task,
      id:todos.length+1,
      isCompleted:false
     }
     axios.post("http://localhost:3004/todos/",payload).then((response)=>{
      handleGetTodosData()
     })
  }
  return (
      <Box boxShadow="1px 1px 6px -3px black" w="100%" p="2rem" display="flex" justifyContent="space-around" alignItems="center">
        <Input onChange={handleInputChange} type="text" w="80%" />
        <Button onClick={handleAddTodo} colorScheme='blue'>Add</Button>
      </Box>
  );
}

export default TodoInput;
