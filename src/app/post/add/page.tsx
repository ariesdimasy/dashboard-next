"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  Text,
  Container,
  Card,
  CardBody,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  useToast,
  Heading,
} from "@chakra-ui/react";

import { createPost } from "@/api/post";

export default function PostAdd() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const router = useRouter();
  const toast = useToast();

  const handleCreatePost = async () => {
    const res = await createPost({
      title: title,
      body: body,
    });

    if (res.status === 401) {
      toast({
        title: "401 Unauthorized",
        description: "you are not authorized doing this action",
      });
    }
  };

  return (
    <>
      <Heading as={"h3"}> Post Add </Heading>
      <hr />

      <Container style={{ marginTop: 40 }}>
        <form>
          <Card>
            <CardBody>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  value={title}
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel> Body </FormLabel>
                <Textarea
                  value={body}
                  name="body"
                  onChange={(e) => setBody(e.target.value)}
                ></Textarea>
              </FormControl>
              <FormControl>
                <Button color={"blue.500"} onClick={() => handleCreatePost()}>
                  Submit{" "}
                </Button>
              </FormControl>
            </CardBody>
          </Card>
        </form>
      </Container>
    </>
  );
}
