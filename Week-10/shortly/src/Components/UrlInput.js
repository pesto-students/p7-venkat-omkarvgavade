import React from "react";
import {Input, Button, Box,Flex } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

function UrlInput({urls,handleGetShortnedUrls}) {
  const [url,setUrl]=useState("");

  const handleInputChange = (event)=>{
     setUrl(event.target.value)
  }
  const handlePostUrl=()=>{
   
    axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`).then(({data})=>{
      const {ok,result}=data;
      let isDuplicate = urls.filter((url)=>{
           return result.short_link === url.shortenedUrl
      }).length>0;
      if(isDuplicate) alert("given url is already shortened");
      if(ok && !isDuplicate) {
        let payload={
          id:urls.length+1,
          url:url,
          shortenedUrl:result.short_link
        }
        axios.post('http://localhost:3004/urls',payload).then((response)=>{
          handleGetShortnedUrls();
        })
      }
    })
  }
  return (
      <Box boxShadow="1px 1px 6px -3px black" w="100%" p="2rem" display="flex" justifyContent="space-around" alignItems="center">
        <Input onChange={handleInputChange} type="text" w="80%" />
        <Button onClick={handlePostUrl} marginLeft="1rem" colorScheme='blue'>Get Short Url</Button>
      </Box>
  );
}

export default UrlInput;