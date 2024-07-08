"use client";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Center,
  Grid,
  FormControl,
  Input,
  Text,
  CardFooter,
  Heading,
} from "@chakra-ui/react";

import { loginProcess } from "@/api/auth";
import { setCookies } from "@/actions/cookies";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const resLogin = await loginProcess(email, password);
      setCookies("authToken", resLogin.data.token);
      router.push("/");
    } catch (err) {
      console.log("err => ", err);
    }
  };

  return (
    <div>
      <Heading as={"h3"}> Login </Heading>
      <hr></hr>

      <Center marginTop={40}>
        <Grid>
          <Card>
            <CardBody>
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
              <FormControl>
                <label> Password </label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Input>
              </FormControl>
            </CardBody>
            <CardFooter>
              <Button onClick={() => handleLogin()}> Login </Button>
            </CardFooter>
          </Card>
        </Grid>
      </Center>
    </div>
  );
}
