"use server"

import {cookies} from "next/headers";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {redirect} from "next/navigation";
import {renewAccessTokenApi} from "@/app/components/signIn/api/signInApi";


export async function logOut(): Promise<void> {
    const cookieStore = await cookies()
    cookieStore.delete("refreshToken");
    cookieStore.delete("accessToken");
    return redirect("../signIn");
}

async function isSessionValid(){
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get("refreshToken")
    if (!refreshToken) {
        return redirect("/")
    }
    return refreshToken.value;
}

async function renewAccessToken(){
    const refreshToken = await isSessionValid()
    if(refreshToken){
        const accessToken = await renewAccessTokenApi(refreshToken);
        await updateAccessTokenToCookie(accessToken);
    }
}

export async function updateAccessTokenToCookie(accessToken: string) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", accessToken,{
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 30 , // 1H
        path: "/"
    });
}

export async function updateRefreshTokenToCookie(refreshToken: string) {
    const cookieStore = await cookies();
    cookieStore.set("refreshToken",refreshToken,{
        secure:true,
        httpOnly:true,
        sameSite: 'strict',
        maxAge: 3600 * 24 * 30,
    })
}

export async function getAccessToken(autoRenew:boolean=true) {
    const cookieStore = await cookies();
    let accessToken:RequestCookie | undefined= cookieStore.get("accessToken");
    if (!accessToken && autoRenew) {
        await renewAccessToken()
        accessToken = cookieStore.get('accessToken')
    }
    return accessToken?.value;
}