import { NextResponse } from 'next/server'
 
export function middleware(request) {
  return NextResponse.redirect(new URL('/api/auth/signin?error=SessionRequired&callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fadmin', request.url))
}
 
export const config = {
  matcher: ['/createproduct/:path*', '/productlist/:path*', '/admindashboard/:path*', '/showformdetails/:path*', '/showorderdetails/:path*']
}