import { HfInference } from "@huggingface/inference";

export const inference = new HfInference("HF_TOKEN");
export const model = "black-forest-labs/FLUX.1-dev";
