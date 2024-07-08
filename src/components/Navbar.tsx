"use client";

import { deleteCookie } from "@/actions/cookies";
import {
  Box,
  Menu,
  Link,
  MenuButton,
  MenuItem,
  MenuList,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import { useRouter } from "next/navigation";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  const router = useRouter();
  return (
    <Box
      bgColor={"blue.400"}
      h={"50px"}
      lineHeight={"50px"}
      color={"white"}
      padding={"0 30px"}
    >
      <nav>
        <Flex>
          <Spacer />
          <Box>
            <Link href={"/login"} style={{ marginLeft: 20 }}>
              Login
            </Link>
            <Link href={"/register"} style={{ marginLeft: 20 }}>
              Register
            </Link>
            <Menu isLazy>
              <MenuButton style={{ marginLeft: 20 }}>Profile</MenuButton>
              <ProfileDropdown />
            </Menu>

            <Link
              href={"#"}
              onClick={() => {
                async function deleteSession() {
                  await deleteCookie("authToken");
                }
                deleteSession();
              }}
              style={{ marginLeft: 20 }}
            >
              Logout
            </Link>
          </Box>
        </Flex>
      </nav>
    </Box>
  );
}
