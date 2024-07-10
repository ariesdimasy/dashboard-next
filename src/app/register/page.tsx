"use client";

import { useState } from "react";

import {
  Button,
  Heading,
  Center,
  Grid,
  Card,
  CardFooter,
  CardBody,
  FormControl,
  Input,
} from "@chakra-ui/react";

import { registerProcess } from "@/api/auth";

import { useRouter } from "next/navigation";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const router = useRouter();

  const handleRegister = () => {
    registerProcess({
      name: name,
      email: email,
      password: password,
    });

    router.push("/");
  };

  return (
    <div>
      <Heading as={"h3"}>Register</Heading>
      <hr />
      <Center marginTop="40">
        <Grid>
          <Card>
            <CardBody>
              <FormControl marginBottom={5}>
                <label> Name </label>
                <Input
                  type="text"
                  name="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl marginBottom={5}>
                <label> Email </label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl marginBottom={5}>
                <label> Password </label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl marginBottom={5}>
                <label> Password Confirm </label>
                <Input
                  type="password"
                  name="password_confirm"
                  id="password_confirm"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                ></Input>
              </FormControl>
            </CardBody>
            <CardFooter>
              <Button onClick={() => handleRegister()}> Register </Button>
            </CardFooter>
          </Card>
        </Grid>
      </Center>
    </div>
  );
}
