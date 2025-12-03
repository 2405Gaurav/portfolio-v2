import type { NextRequest } from "next/server";

export function register() {
  // No instrumentation logic for standalone setup
}

export async function onRequestError(
  error: unknown,
  request: NextRequest
) {
  console.error("Request error:", error);
}
