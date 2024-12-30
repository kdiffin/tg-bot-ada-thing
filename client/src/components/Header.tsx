import { ImageIcon } from "@radix-ui/react-icons";
import { Link } from "react-router";
import { LoginButton } from "@telegram-auth/react";
import { botUsername } from "@/supabase-client";
import { useAuth } from "@/context/context";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header() {
  const { user, login, logout } = useAuth();

  return (
    <header className="border-b border-zinc-800 bg-zinc-900">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <ImageIcon className="h-6 w-6 text-purple-500" />
            <h1 className="text-2xl font-bold text-white">
              <Link to={"/"}>kdiffimage</Link>
            </h1>
          </div>

          <div className="flex items-center gap-2">
            {user ? (
              <div className="flex items-center gap-2">
                <Link to={"/user/" + user.username}>
                  <Button variant={"outline"}>@{user.username}</Button>
                </Link>
                <Button onClick={logout} variant={"destructive"}>
                  Logout
                </Button>
              </div>
            ) : (
              <LoginButton
                botUsername="kdiffimagebot"
                onAuthCallback={login}
                buttonSize="medium"
                showAvatar={false}
                cornerRadius={5}
                lang="en"
              />
            )}

            <a
              target="_blank"
              href="https://t.me/kdiffimage"
              className="hover:underline text-blue-400 "
            >
              <Button variant={"telegram"}>Telegram Bot</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
