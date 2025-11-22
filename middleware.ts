import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest){
    const token = request.cookies.get("refreshToken")?.value;
    const protectedRouts = ["/components/dashboard", "/components/carCustomizer"];

    if (protectedRouts.includes(request.nextUrl.pathname)) {
        if (!token) {
            return  NextResponse.redirect(new URL("/components/signIn", request.url));
        }
    }
    return  NextResponse.next();
}