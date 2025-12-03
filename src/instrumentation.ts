import type { NextRequest } from "next/server";

export function register() {
  // No instrumentation logic for standalone setup
}

export async function onRequestError(
  error: unknown,
  
) {
  console.error("Request error:", error);
}
