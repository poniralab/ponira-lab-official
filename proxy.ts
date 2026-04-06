// proxy.ts
import { NextRequest, NextResponse } from "next/server";

const SUBDOMAIN_MAP: Record<string, string> = {
  linktree: "/linktree",
  studio: "/studio",
  creative: "/creative",
  systems: "/systems",
  motion: "/audiovisual", 
};

export function proxy(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const url = req.nextUrl.clone();
  const subdomain = host.split(".")[0];

  const targetPath = SUBDOMAIN_MAP[subdomain];

  if (targetPath) {
    if (url.pathname.startsWith(targetPath)) {
      return NextResponse.next();
    }
    url.pathname = `${targetPath}${url.pathname === "/" ? "" : url.pathname}`;

    console.log(`🎯 Proxy [${subdomain}] -> ${url.pathname}`);

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};