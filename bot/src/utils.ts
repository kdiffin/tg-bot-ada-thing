import prompts, {
  all,
  animePopCulturePrompts,
  genZBrainrotPrompts,
} from "./prompts";

export const getRandomPrompt = () =>
  prompts[Math.floor(Math.random() * prompts.length)];

export const getRandomPromptAll = () =>
  all[Math.floor(Math.random() * all.length)];

export const getRandomAnimePrompt = () =>
  animePopCulturePrompts[
    Math.floor(Math.random() * animePopCulturePrompts.length)
  ];

export const getRandomPromptBrainrot = () =>
  genZBrainrotPrompts[Math.floor(Math.random() * genZBrainrotPrompts.length)];
