import { Telegraf } from "telegraf";
import { inference, model } from "./huggingface";
import { generateSingleImage } from "./generateImage";
import prompts, { animePopCulturePrompts } from "./prompts";
import { setupCommands } from "./commands";
import { setupButtons } from "./buttons";
import "dotenv/config";

// Replace with your BotFather token
const bot = new Telegraf(process.env.BOT_TOKEN ?? "");

// Setup commands
setupCommands(bot);

// Setup inline buttons
setupButtons(bot);

bot.telegram.setMyCommands([
  { command: "start", description: "Start interacting with the bot" },
  { command: "generateimage", description: "Generate a single image" },
  { command: "multiimage", description: "Generate up to 3 images" },
  { command: "recommended", description: "Get recommended prompts" },
  { command: "anime", description: "Generate an anime-themed image" },
  {
    command: "brainrot",
    description: "Generate a gen-z brainrot-themed image",
  },

  { command: "random", description: "Generate a totally random image" },
  {
    command: "showprofile",
    description: "See all the images you've generated!",
  },
]);

// Launch the bot
bot
  .launch()
  .then(() => console.log("Bot is running..."))
  .catch((error) => console.error("Failed to launch bot:", error));

// Graceful shutdown of bot
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
