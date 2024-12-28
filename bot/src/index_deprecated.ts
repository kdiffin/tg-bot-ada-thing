import { Telegraf } from "telegraf";

// Replace with your BotFather token
const bot = new Telegraf(""); // Add your bot token here

// Define behavior for /start command
bot.start((ctx) => {
  ctx.reply("Hello, World!");
});

// Define behavior for /generateimage command
bot.command("generateimage", async (ctx) => {
  const message = ctx.message?.text.split(" ").slice(1).join(" ");

  if (!message) {
    ctx.reply("Please provide a message after /generateimage.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/generateimage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: message }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response from backend:", errorText);
      ctx.reply("Failed to generate image.");
      return;
    }

    const data = await response.json();
    const base64Image = data.image;

    if (!base64Image || !base64Image.startsWith("data:image/png;base64,")) {
      ctx.reply("Failed to generate a valid image.");
      return;
    }

    // Remove the `data:image/png;base64,` prefix for Telegram
    const buffer = Buffer.from(base64Image.split(",")[1], "base64");

    await ctx.replyWithPhoto({ source: buffer });
  } catch (error) {
    console.error("Error while calling the endpoint:", error);
    ctx.reply("An error occurred while processing your request.");
  }
});

// Launch the bot
bot
  .launch()
  .then(() => console.log("Bot is running..."))
  .catch((error) => console.error("Failed to launch bot:", error));

// Graceful shutdown of bot
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
