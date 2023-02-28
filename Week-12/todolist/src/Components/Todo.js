import React from "react";
import TodoInput from "./TodoInput";
import TodosDisplay from "./TodosDisplay";
import { useState,useEffect } from "react";
import { Flex, Box, Button, Input ,VStack} from "@chakra-ui/react";
import axios from "axios";

function Todo() {
  const [todos,setTodos] = useState([]);
  
  const handleGetTodosData = ()=>{
    axios.get("http://localhost:3004/todos").then(({data})=>{
       setTodos(data);
    });
  }
  useEffect(()=>{
    handleGetTodosData();
  },[])
  return (
    <div w="100vw" >
      <Flex w="100%" justifyContent="center" alignItems="center" >
        <Box w="35%"></Box>
        <VStack  w="40%" p="2rem">
          <TodoInput todos={todos} handleGetTodosData={handleGetTodosData}/>
          <TodosDisplay todos={todos} handleGetTodosData={handleGetTodosData}/>
        </VStack>
        <Box w="35%"></Box>
      </Flex>
    </div>
  );
}

export default Todo;
