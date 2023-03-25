import React from 'react'
import UrlItem from './UrlItem'
import { VStack } from '@chakra-ui/react'
function UrlsDisplay({urls,handleGetShortnedUrls,setUrls}) {
  return (
    <VStack w="100%" marginTop="3rem !important">
        {
          (urls && urls.length > 0 ) ? urls.map((el)=>{
            return <UrlItem key={el.id} url={el} setUrls={setUrls} handleGetShortnedUrls={handleGetShortnedUrls}/>
          })
       :null }
    </VStack>
  )
}

export default UrlsDisplay