import { HfInference } from "@huggingface/inference";
import "dotenv/config";

export const inference = new HfInference(process.env.HF_TOKEN ?? "");
export const model = "stabilityai/stable-diffusion-3.5-large";
