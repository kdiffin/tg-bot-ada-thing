import { Telegraf } from "telegraf";
import { inference, model } from "./huggingface";
import { generateSingleImage } from "./generateImage";

// Replace with your BotFather token
const bot = new Telegraf("7733586668:AAFh2vC5Xdwmg4nTxy334hK36rftz5iH5WM"); // Add your bot token here

// Define behavior for /start command
bot.start((ctx) => {
  ctx.reply("Hello, World!");
});

// Define behavior for /generateimage command
bot.command("generateimage", async (ctx) => {
  const message = ctx.message?.text.split(" ").slice(1).join(" ");

  if (!ctx.message || ctx.message.text === undefined) {
    ctx.reply(
      "This command only works with text messages. Please provide a text prompt after /generateimage."
    );
    return;
  }

  await generateSingleImage(ctx, message);
});

// Launch the bot
bot
  .launch()
  .then(() => console.log("Bot is running..."))
  .catch((error) => console.error("Failed to launch bot:", error));

// Graceful shutdown of bot
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
