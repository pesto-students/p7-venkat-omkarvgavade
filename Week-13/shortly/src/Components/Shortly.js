import React from "react";
import UrlInput from "./UrlInput";
import UrlsDisplay from "./UrlsDisplay";
import { useState,useEffect } from "react";
import { Flex, Box, Button, Input ,VStack} from "@chakra-ui/react";
import axios from "axios";

function Shortly() {
  const [urls,setUrls] = useState([]);
  
  const handleGetShortnedUrls = ()=>{
    axios.get("http://localhost:3004/urls").then(({data})=>{
       setUrls(data);
    });
  }
  useEffect(()=>{
    handleGetShortnedUrls();
  },[])
  return (
    <div w="100vw" >
      <Flex w="100%" justifyContent="center" alignItems="center" >
        <Box w="35%"></Box>
        <VStack  w="40%" p="2rem">
          <UrlInput urls={urls} handleGetShortnedUrls={handleGetShortnedUrls}/>
          <UrlsDisplay urls={urls} handleGetShortnedUrls={handleGetShortnedUrls}/>
        </VStack>
        <Box w="35%"></Box>
      </Flex>
    </div>
  );
}

export default Shortly;