"use client";
import { useState } from "react";
import {
  Button,
  Box,
  FormControl,
  Card,
  CardBody,
  Input,
} from "@chakra-ui/react";
import { uploadImage } from "@/api/sample";
import Image from "next/image";

export default function Sample() {
  const [file, setFile] = useState<any>(null);

  const handleUploadFile = () => {
    async function myUploadImage() {
      const res = await uploadImage({ file: file });
      alert(res.data.message);
    }
    myUploadImage();
  };

  return (
    <Box>
      <Card>
        <CardBody>
          <FormControl>
            <label>File </label>
            <Input
              type="file"
              name="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </FormControl>
          <FormControl>
            <Button
              onClick={() => {
                handleUploadFile();
              }}
            >
              {" "}
              Submit{" "}
            </Button>
          </FormControl>
        </CardBody>
      </Card>
      <Image
        src={"/IMG1720449982541.jpg"}
        width={200}
        height={200}
        alt="ini gambar"
      />
    </Box>
  );
}
