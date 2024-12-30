import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import { supabase } from "./supabase-client";
import { Image } from "./dbtypes";
import { Outlet } from "react-router";
import ImageDialog from "./components/ImageDialog";
import { Toaster } from "./components/ui/toaster";

function Layout() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <ImageDialog />
      <Toaster />
    </div>
  );
}

export default Layout;
