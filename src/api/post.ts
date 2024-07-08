"use server"
import axios from "axios"
import { getCookie } from "../actions/cookies"

const base_api = "http://localhost:5670"

export async function getAllPosts() {
    const authToken = await getCookie("authToken")
    const res = await axios.get(base_api + "/post", {
        headers: {
            Authorization: "Bearer " + authToken
        }
    })
    return res.data
}

export async function createPost(params: any) {
    const authToken = await getCookie("authToken")
    const res = await axios.post(base_api + "/post", {
        title: params.title,
        body: params.body
    }, {
        headers: {
            Authorization: "Bearer " + authToken
        }
    })

    return res
}