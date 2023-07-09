import {NextResponse} from 'next/server';
export const config = {
    matcher: [
        // Skip all files with URL extensions and internal paths (_next)
        "/((?!.*\\..*|_next).*)",
    ],
}

export async function middleware(request) {
    let requestHeaders = new Headers(request.headers);
    const clientPathname = request.nextUrl.pathname;
    const nextJsPathname = getNextJsPathname(request, requestHeaders)

    let response;
    console.log("Client path: " + clientPathname);
    // Rewrite on server-side only if path changed
    if (clientPathname !== nextJsPathname) {
        console.log("Next.js rewrite path: " + nextJsPathname);
        response = NextResponse.rewrite(new URL(nextJsPathname, request.url))
    } else {
        response = NextResponse.next();
    }
    return response;
}

/**
 * Makes any needed adjustments from client path to server path so matches Next.js server routing syntax.
 */
function getNextJsPathname(request, requestHeaders) {
    let nextJsPathname = request.nextUrl.pathname;
    // Check for custom locale at start of URL with 2 characters without or without proceeding slashes e.g. /fr/
    const localeRegex = /^\/?(\w{2,2})(?:\/|$)/;
    const localeMatch = nextJsPathname.match(localeRegex);
    let locale;
    if (localeMatch) {
        locale = localeMatch[1];
    } else {
        // No locale specified so adjust path to default locale for server-side processing only
        locale = "en";
        nextJsPathname = `/${locale}${nextJsPathname}`;
    }
    return nextJsPathname;
}
