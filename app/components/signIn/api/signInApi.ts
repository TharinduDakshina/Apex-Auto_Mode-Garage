"use server"

import {updateAccessTokenToCookie, updateRefreshTokenToCookie} from "@/app/lib/session";

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

    const token:{accessToken:string,refreshToken:string} = await response.json();
    
    // save token in session
    await updateAccessTokenToCookie(token.accessToken);
    await updateRefreshTokenToCookie(token.refreshToken)

    console.log(token.accessToken);
    console.log(token.refreshToken);

    return true;
}

export async function renewAccessTokenApi(refreshToken:string){
    const response = await fetch(`${BACKEND_URL}/accessToken`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${refreshToken}`,
        },
    })
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    const accessToken = await response.text()
    return accessToken
}