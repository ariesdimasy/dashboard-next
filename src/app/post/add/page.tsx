"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  Divider,
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

  const handleCreatePost = () => {
    async function createPostAgain() {
      const res = await createPost({
        title: title,
        body: body,
      });
    }
    createPostAgain();

    router.push("/post");
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
                <FormLabel> Image </FormLabel>
                <Input type="file" name="image" onChange={() => {}} />
              </FormControl>
              <Divider />
              <FormControl margin={"10px 0 0 0"}>
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
