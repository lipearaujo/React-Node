"use server";
import { cookies } from "next/headers";

export async function createSession(token: string) {
  cookies().set("accessToken", token, {
    httpOnly: true,
    secure: true,
    path: "/",
  });
}

export async function getCookie() {
  const session = cookies().get("accessToken")?.value;

  if (!session) {
    return null;
  }

  return session;
}

export async function deleteSession() {
  cookies().delete("accessToken");
}
