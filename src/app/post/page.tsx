"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  UnorderedList,
  ListItem,
  useToast,
  Button,
  Link,
} from "@chakra-ui/react";

import { getAllPosts } from "@/api/post";

export default function Post() {
  const [posts, setPosts] = useState([]);

  const toast = useToast();

  const handleGetPosts = async () => {
    const posts = await getAllPosts();
    setPosts(posts.data);
  };

  useEffect(() => {
    async function getPosts() {
      handleGetPosts();
    }
    getPosts();
  }, []);

  return (
    <div>
      <Flex>
        <Box w={"95%"}>
          <Heading as={"h3"}> Post </Heading>
        </Box>
        <Box>
          <Link href="/post/add"> Add Post </Link>
        </Box>
      </Flex>
      <hr></hr>

      <UnorderedList>
        {posts?.map((item: any, index: number) => (
          <ListItem key={index}>{item.title}</ListItem>
        ))}
      </UnorderedList>
    </div>
  );
}
