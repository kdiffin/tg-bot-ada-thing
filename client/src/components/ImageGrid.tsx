import { Card, CardContent } from "@/components/ui/card";
import { Image } from "../dbtypes";
import { Link, useSearchParams } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/supabase-client";
import {
  Copy,
  Eye,
  EyeClosedIcon,
  Fullscreen,
  FullscreenIcon,
  Link2,
  LucideWrench,
  Trash2,
  User,
  Wrench,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCopyToClipboard } from "@/hooks/useClipboard";
import { useAuth } from "@/context/context";

interface ImageGridProps {
  images: Image[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  const queryClient = useQueryClient();
  const [_, setSearchParams] = useSearchParams();
  const { toast } = useToast();
  const copyToClipboard = useCopyToClipboard();
  const { user } = useAuth();

  const visibleImages = images.filter(
    (image) =>
      image.public || (user && image.usersTelegramID === user.id.toString())
  );

  const toggleVisibility = useMutation({
    mutationFn: async (imageId: number) => {
      const image = images.find((img) => img.id === imageId);
      if (!image) throw new Error("Image not found");

      const { error } = await supabase
        .from("Image")
        .update({ public: !image.public })
        .eq("id", imageId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["images"] });
      toast({
        title: "Success",
        description: "Image visibility updated",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update image visibility",
        variant: "destructive",
      });
    },
  });

  const deleteImage = useMutation({
    mutationFn: async (imageId: number) => {
      const { error } = await supabase.from("Image").delete().eq("id", imageId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["images"] });
      toast({
        title: "Success",
        description: "Image deleted successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete image",
        variant: "destructive",
      });
    },
  });

  // Only show visibility toggle for user's own images
  const canUpdateVisibility = (image: Image) =>
    user && image.usersTelegramID === user.id.toString();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-6">
      {[...visibleImages].reverse().map((image) => (
        <Card
          onClick={() => setSearchParams({ image: image.id.toString() })}
          key={image.id}
          className="bg-zinc-800 hover:border-accent transition-colors cursor-pointer border-zinc-700 border-2"
        >
          <CardContent className="p-0 relative">
            <div className="relative">
              {!image.public && (
                <div className="absolute top-2 left-2 bg-black/50 px-2 py-1 rounded-md text-xs flex items-center gap-1">
                  <EyeClosedIcon className="h-3 w-3" />
                  Private
                </div>
              )}
            </div>
            <div className="aspect-square w-full">
              <img
                src={`data:image/png;base64,${image.image}`}
                alt={image.imagePrompt}
                className="w-full h-full object-cover rounded-t-sm"
              />
            </div>
            <div className="p-4">
              <p className="text-accent font-semibold truncate   mb-3">
                {image.imagePrompt}
              </p>
              <div className="flex items-center  justify-between">
                <div className="flex text-sm items-center gap-2">
                  <div className="text-muted-foreground flex items-center ">
                    <User size={13} />:
                  </div>
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    to={"/user/" + image.usersName}
                    className="text-white hover:text-accent hover:underline underline-offset-4"
                  >
                    @{image.usersName}
                  </Link>
                </div>

                <div className="flex items-center gap-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="outline-border   bg-background rounded-sm flex items-center gap-1 px-3 p-1 text-xs ">
                        <LucideWrench size={13} />
                        Tools
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Image tools</DropdownMenuLabel>
                      <DropdownMenuSeparator />

                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation();
                          const url = `${window.location.origin}/?image=${image.id}`;
                          copyToClipboard(url);
                        }}
                      >
                        <Link2 className="mr-2 h-4 w-4" />
                        Share Link
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          setSearchParams({ image: image.id.toString() })
                        }
                      >
                        <Copy className="mr-2 h-4 w-4" />
                        View Fullscreen
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleVisibility.mutate(image.id);
                        }}
                        disabled={!canUpdateVisibility(image)}
                      >
                        {image.public ? (
                          <>
                            <EyeClosedIcon className="mr-2 h-4 w-4" />
                            Make Private
                          </>
                        ) : (
                          <>
                            <Eye className="mr-2 h-4 w-4" />
                            Make Public
                          </>
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteImage.mutate(image.id);
                        }}
                        disabled={!canUpdateVisibility(image)}
                        className="text-red-500 focus:bg-white focus:text-red-500"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Image
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
