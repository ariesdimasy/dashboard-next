"use client"
import axios from "axios"
import { getCookie } from "../actions/cookies"
const base_url_api = "http://localhost:5670"

export async function loginProcess(email: string, password: string) {

    const res = await axios.post(base_url_api + "/auth/login", {
        email: email,
        password: password
    })

    return res
}

export async function registerProcess(data: any) {
    const res = await axios.post(base_url_api + "/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password
    })

    return res
}

export async function me() {
    const authToken = await getCookie("authToken")
    if (authToken) {
        const res = await axios.get(base_url_api + "/auth/me", {
            headers: {
                Authorization: "Bearer " + authToken
            }
        })

        return res
    }
    return {}

}