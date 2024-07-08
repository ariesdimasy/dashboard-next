import {
  Center,
  Box,
  Link,
  Menu,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  Divider,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <Box w={"15%"} h={"110vh"} bgColor={"blue.500"} color={"white"} padding={3}>
      <Center style={{ margin: "0 0 14px 0" }}>
        <Link href={"/"}>Yudhistira.id</Link>
      </Center>
      <Divider />
      <Center padding={3}>
        <List>
          <ListItem padding={3}>
            <Link href={"/"} className="">
              Home
            </Link>
          </ListItem>
          <ListItem padding={3}>
            <Link href={"/post"} className="">
              Blog
            </Link>
          </ListItem>
          <ListItem padding={3}>
            <Link href={"/product"} className="">
              Product
            </Link>
          </ListItem>
          <ListItem padding={3}>
            <Link href={"/project"} className="">
              Project
            </Link>
          </ListItem>
          <ListItem padding={3}>
            <Link href={"/about"} className="">
              About
            </Link>
          </ListItem>
        </List>
      </Center>
    </Box>
  );
}
