import React from 'react'
import UrlItem from './UrlItem'
import { VStack } from '@chakra-ui/react'
function UrlsDisplay({urls,handleGetShortnedUrls}) {
  return (
    <VStack w="100%" marginTop="3rem !important">
        {
          urls.map((el)=>{
            return <UrlItem key={el.id} url={el} handleGetShortnedUrls={handleGetShortnedUrls}/>
          })
        }
    </VStack>
  )
}

export default UrlsDisplay