import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import axios from "axios";
import copy from "copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
function UrlItem({ url, handleGetShortnedUrls }) {
  const handleDeleteUrl = (id) => {
    axios.delete("http://localhost:3004/urls/" + id).then((response) => {
      handleGetShortnedUrls();
    });
  };
  const copyToClipboard = (url) => {
    copy(url);
    alert(`You have copied "${url}"`);
  };
  return (
    <Flex
      boxShadow="1px 1px 6px -3px black"
      w="100%"
      p="2rem"
      alignItems="center"
    >
      <Box w="60%" paddingLeft="1rem" textAlign="start" textOverflow="ellipsis">
        <Link href={url.url} isExternal>
          {url.url}
        </Link>
      </Box>
      <Box w="30%" paddingLeft="1rem" textAlign="start">
        <Link href={"https://" + url.shortenedUrl} isExternal>
          {url.shortenedUrl}
        </Link>
      </Box>
      <Box w="10%">
        <Flex>
          <span style={{ cursor: "pointer"}}>
            <IconContext.Provider value={{ color: "black", size: "22px" }}>
              <FaCopy
                onClick={() => {
                  copyToClipboard(url.shortenedUrl);
                }}
              />
            </IconContext.Provider>
          </span>
          <span style={{ cursor: "pointer",marginLeft:"1rem"}}>
            <IconContext.Provider value={{ color: "black", size: "25px" }}>
              <AiFillDelete
                onClick={() => {
                  handleDeleteUrl(url.id);
                }}
              />
            </IconContext.Provider>
          </span>
        </Flex>
      </Box>
    </Flex>
  );
}

export default UrlItem;
