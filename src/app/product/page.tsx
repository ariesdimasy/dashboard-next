"use client";
import { useState, useEffect } from "react";
import { Heading, Table, Td, Th, Thead, Tbody, Tr } from "@chakra-ui/react";
import { getAllProduct } from "@/api/product";

export default function Product() {
  const [products, setProducts] = useState<any>([]);

  const handleGetProducts = async () => {
    const res = await getAllProduct();
    setProducts(res.data);
  };

  useEffect(() => {
    async function getProducts() {
      await handleGetProducts();
    }
    getProducts();
  }, []);

  return (
    <div>
      <Heading as={"h3"}> Product </Heading>
      <hr></hr>
      <Table marginTop={10}>
        <Thead>
          <Tr>
            <Th> ID </Th>
            <Th> Image </Th>
            <Th> Name </Th>
            <Th> Price </Th>
            <Th> Stock </Th>
            <Th> Action </Th>
          </Tr>
        </Thead>
        <Tbody>
          {products?.data?.map((item: any, index: number) => (
            <Tr key={index}>
              <Td>{item.id}</Td>
              <Td>
                <img
                  src={"http://localhost:8000/images/" + item.image}
                  width={100}
                  height={200}
                  alt="the fool"
                ></img>
              </Td>
              <Td>{item.name}</Td>
              <Td>{item.price}</Td>
              <Td>{item.stock}</Td>
              <Td></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}
