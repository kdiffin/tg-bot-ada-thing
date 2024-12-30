import { useQuery } from "@tanstack/react-query";
import { Dialog, DialogContent } from "./ui/dialog";
import { supabase } from "../supabase-client";
import { Image } from "../dbtypes";
import { Link, useSearchParams } from "react-router";
import { User } from "lucide-react";

export default function ImageDialog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const imageId = searchParams.get("image");

  const { data: image, isLoading } = useQuery({
    queryKey: ["image", imageId],
    queryFn: async () => {
      if (!imageId) return null;
      const { data, error } = await supabase
        .from("Image")
        .select("*")
        .eq("id", imageId)
        .single<Image>();

      if (error) throw error;
      return data;
    },
    enabled: !!imageId,
  });

  const handleClose = () => {
    setSearchParams({});
  };

  return (
    <Dialog open={!!imageId} onOpenChange={handleClose}>
      <DialogContent className="bg-zinc-800 border-zinc-700 max-w-[90vw]  p-0 md:max-w-2xl">
        {isLoading ? (
          <div className="p-8">Loading...</div>
        ) : image ? (
          <div className="">
            <img
              src={`data:image/png;base64,${image.image}`}
              alt={image.imagePrompt}
              className="w-full rounded-t-lg"
            />
            <div className="p-6">
              <p className="text-lg text-accent font-semibold mb-4">
                {image.imagePrompt}
              </p>
              <div className="flex  items-center gap-2">
                <div className="text-muted-foreground flex items-center ">
                  <User size={18} />:
                </div>
                <Link
                  to={"/user/" + image.usersName}
                  className="text-white hover:text-accent hover:underline underline-offset-4"
                >
                  @{image.usersName}
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
