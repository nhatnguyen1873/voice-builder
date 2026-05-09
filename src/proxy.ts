import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);
const isOrgSelectionRoute = createRouteMatcher(['/org-selection(.*)']);

export default clerkMiddleware(async (auth, req) => {
  const { userId, orgId } = await auth();

  if (!isPublicRoute(req) && !userId) {
    await auth.protect();
  }

  if (userId && !orgId && !isOrgSelectionRoute(req)) {
    const orgSelectionUrl = new URL('/org-selection', req.url);
    orgSelectionUrl.search = req.nextUrl.search;
    return NextResponse.redirect(orgSelectionUrl);
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    // Always run for Clerk-specific frontend API routes
    '/__clerk/(.*)'
  ]
};
