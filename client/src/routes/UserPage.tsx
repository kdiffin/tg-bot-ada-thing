import { useQuery } from "@tanstack/react-query";
import Header from "../components/Header";
import ImageGrid from "../components/ImageGrid";
import { supabase } from "../supabase-client";
import { Image } from "../dbtypes";
import { useParams } from "react-router";

export default function UserPage() {
  const { username } = useParams();

  const {
    data: images,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["images", username],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("Image")
        .select("*")
        .eq("usersName", username)
        .returns<Image[]>();

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;
  if (!images) return <div className="text-white">No images found</div>;

  return (
    <>
      <h1 className="text-2xl font-bold text-white mb-8">
        Images by {username}
      </h1>
      <ImageGrid images={images} />
    </>
  );
}
