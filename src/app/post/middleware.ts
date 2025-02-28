"use server"
import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {

    console.log("HELLO MIDDLEWARE POST")
    const access = false
    if (access) {
        console.log("REALLY ?")
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/login', req.nextUrl))

}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}