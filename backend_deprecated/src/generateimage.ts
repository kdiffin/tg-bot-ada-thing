import { Router, Request, Response } from "express";
import fetch from "node-fetch";
import { inference, model } from "./huggingface";

const router = Router();

router.post("/generateimage", async (req: Request, res: Response) => {
  const { prompt } = req.body;

  if (!prompt) {
    res.status(400).send("No prompt provided.");
    return;
  }

  const result = await inference.textToImage({
    inputs: "cat with long fangs",
    model: model,
  });

  console.log(result);
});

export default router;
