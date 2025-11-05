"use server"

import {cookies} from "next/headers";

const BACKEND_URL = `${process.env.BACKEND_URL}/auth`;

export async function signInApi(form:{name: string, password: string}): Promise<boolean> {
    const requestPayload = {
        userName : form.name,
        password : form.password,
    }

    const response = await fetch(`${BACKEND_URL}/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload)
    });

    if (!response.ok) {
        console.log("Error creating account");
        return false;
    }

    const token = await response.text();
    
    // save token in session
     (await cookies()).set("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 , // 1H
        path: "/"
    });


    return true;
}