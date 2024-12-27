import { Router, Request, Response } from "express";
import fetch from "node-fetch";

const router = Router();

router.post("/generateimage", async (req: Request, res: Response) => {
  const { prompt } = req.body;

  if (!prompt) {
    res.status(400).send("No prompt provided.");
    return;
  }

  try {
    const fetchWithRetry = async (retries = 5, delay = 60000) => {
      for (let i = 0; i < retries; i++) {
        const response = await fetch(
          "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer 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`,
            },
            body: JSON.stringify({ inputs: prompt }),
          }
        );

        if (
          response.ok &&
          response.headers.get("content-type")?.includes("image")
        ) {
          return await response.buffer(); // Return raw image data as a Buffer
        }

        const responseText = await response.text();

        const data = JSON.parse(responseText);

        if (data.error?.includes("loading")) {
          console.log(
            `Model is still loading, retrying in ${delay / 1000} seconds...`
          );
          await new Promise((resolve) => setTimeout(resolve, delay));
        } else {
          throw new Error(data.error || "Failed to generate image.");
        }
      }

      throw new Error("Model did not load within the expected time.");
    };

    const imageBuffer = await fetchWithRetry();

    if (!imageBuffer) {
      res.status(500).send("Failed to generate image.");
      return;
    }

    const base64Image = imageBuffer.toString("base64");

    res.send({ image: `data:image/png;base64,${base64Image}` });
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).send("Error generating image.");
  }
});

export default router;
