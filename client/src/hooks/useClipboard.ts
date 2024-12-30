import { useToast } from "./use-toast";

export function useCopyToClipboard() {
  const { toast } = useToast();

  const copyToClipboard = async (text: string) => {
    try {
      if (!navigator.clipboard) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand("copy");
          toast({
            title: "Success!",
            description: "Link copied to clipboard",
            variant: "default",
          });
        } catch (err) {
          throw new Error("Failed to copy");
        }
        document.body.removeChild(textArea);
        return;
      }

      await navigator.clipboard.writeText(text);
      toast({
        title: "Success!",
        description: "Link copied to clipboard",
        variant: "default",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually",
        variant: "destructive",
      });
    }
  };

  return copyToClipboard;
}
