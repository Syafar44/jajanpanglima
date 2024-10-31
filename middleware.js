import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();

  if (req.nextUrl.pathname === "/sw.js") {
    res.headers.set("Cache-Control", "no-cache");
  }

  return res;
}
