import React from 'react'
import TodoItem from './TodoItem'
import { VStack } from '@chakra-ui/react'
function TodosDisplay({todos,handleGetTodosData}) {
  return (
    <VStack w="100%" marginTop="3rem !important">
        {
          todos.map((el)=>{
            return < TodoItem key={el.id} todo={el} handleGetTodosData={handleGetTodosData}/>
          })
        }
    </VStack>
  )
}

export default TodosDisplay