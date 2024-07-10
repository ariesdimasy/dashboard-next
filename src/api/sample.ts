"use client"
import axios from "axios"
const base_url_api = process.env.base_url_api
export async function uploadImage(data: any) {

    const formData = new FormData()
    const myFile = formData.append("file", data.file)

    return await axios.post(base_url_api + "/samples/single-upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    })
}