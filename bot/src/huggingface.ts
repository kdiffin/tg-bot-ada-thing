import { HfInference } from "@huggingface/inference";

const HF_TOKEN = "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";

export const inference = new HfInference(HF_TOKEN);
export const model = "stabilityai/stable-diffusion-3.5-large";
