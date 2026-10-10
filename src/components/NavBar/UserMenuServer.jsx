// components/UserMenuServer.jsx
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import UserMenu from "./UserMenu";

export default async function UserMenuServer() {
  const session = await auth.api.getSession({ headers: await headers() });
  return <UserMenu user={session?.user ?? null} />;
}