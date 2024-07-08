"use server"
import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}