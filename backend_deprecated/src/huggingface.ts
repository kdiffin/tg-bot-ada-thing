import { HfInference } from "@huggingface/inference";

const HF_TOKEN = "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";

export const inference = new HfInference(HF_TOKEN);
export const model = "black-forest-labs/FLUX.1-dev";
