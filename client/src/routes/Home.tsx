import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabase-client";
import { Image } from "../dbtypes";
import ImageGrid from "../components/ImageGrid";

export default function HomePage() {
  const {
    data: images,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("Image")
        .select("*")
        .limit(50)
        .returns<Image[]>();

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;
  if (!images) return <div>images not found</div>;

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold text-white mb-2">Recent Images</h1>
      <p className="mb-8 text-muted-foreground italic">
        Click on usernames to see a users image collection
      </p>
      <ImageGrid images={images} />
    </div>
  );
}
