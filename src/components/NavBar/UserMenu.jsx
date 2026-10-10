// components/UserMenu.jsx
"use client";
import {
  Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, Button,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function UserMenu({ user }) {
  const router = useRouter();

  if (!user) {
    return (
      <Button as={Link} href="/login" color="success" radius="full" size="sm">
        লগইন
      </Button>
    );
  }

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: { onSuccess: () => router.refresh() },
    });
  };

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <button className="flex items-center gap-2 outline-none">
          <Avatar src={user.image} name={user.name} size="sm" />
          <span className="text-sm font-medium">{user.name}</span>
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="ইউজার মেনু">
        <DropdownItem key="profile" href="/profile">প্রোফাইল</DropdownItem>
        <DropdownItem key="logout" color="danger" onPress={handleSignOut}>
          লগআউট
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}