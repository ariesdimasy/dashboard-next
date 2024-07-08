"use client"
import axios from "axios"
import { getCookie } from "@/actions/cookies"
const base_api = "http://localhost:5670"
export async function getAllProduct() {
    const authToken = await getCookie("authToken")

    return await axios.get(base_api + "/product", {
        headers: {
            Authorization: "Bearer " + authToken
        }
    })
}