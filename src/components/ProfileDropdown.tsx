"use client";
import { useState, useEffect } from "react";
import { MenuList, MenuItem } from "@chakra-ui/react";
import { me } from "@/api/auth";

interface IProfileDropdownProps {}

export default function ProfileDropdown(props: IProfileDropdownProps) {
  const [dataToken, setDataToken] = useState<any>(false);

  const handleGetUserData = () => {
    async function getUserData() {
      const userData = await me();
      setDataToken(userData.data);
    }
    getUserData();
  };

  useEffect(() => {
    handleGetUserData();
  }, []);
  return (
    <MenuList color={"black"}>
      <MenuItem>Name : {dataToken?.data?.name}</MenuItem>
      <MenuItem>Email : {dataToken?.data?.email}</MenuItem>
    </MenuList>
  );
}
