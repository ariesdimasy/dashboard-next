"use server"
import { NextRequest, NextResponse } from 'next/server'
import * as jose from 'jose'
// import { decrypt } from '@/app/lib/session'
import { cookies } from 'next/headers'

// 1. Specify protected and public routes
const protectedRoutes = ['/product']
const publicRoutes = ['/login', '/', '/post']

export default async function middleware(req: NextRequest) {
    try {
        const path = req.nextUrl.pathname
        const isProtectedRoute = protectedRoutes.includes(path)
        const isPublicRoute = publicRoutes.includes(path)

        // 3. Decrypt the session from the cookie
        const authToken = cookies().get('authToken')?.value as any

        let session = null
        if (authToken) {
            session = await jose.jwtVerify(authToken, new TextEncoder().encode("mySecretAcademia"))

        }

        // 5. Redirect to /login if the user is not authenticated
        if (isProtectedRoute && !session?.payload?.email) {

            return NextResponse.redirect(new URL('/login', req.nextUrl))
        }

        return NextResponse.next()
    } catch (err) {

        return NextResponse.next()

    }
    // 2. Check if the current route is protected or public

}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}