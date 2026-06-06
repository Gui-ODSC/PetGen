import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const session = request.cookies.get("laravel_session");

	const publicRoutes = ["/", "/login", "/signUp"];

	if (publicRoutes.includes(request.nextUrl.pathname)) {
		return NextResponse.next();
	}

	if (!session) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next|favicon.ico|.*\\..*).*)"],
};
