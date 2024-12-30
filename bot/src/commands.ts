import { Context, Markup, Telegraf } from "telegraf";
import { generateSingleImage } from "./generateImage";
import prompts from "./prompts";
import {
  getRandomAnimePrompt,
  getRandomPrompt,
  getRandomPromptAll,
  getRandomPromptBrainrot,
} from "./utils";
import { Update } from "telegraf/typings/core/types/typegram";

export function setupCommands(bot: Telegraf<Context<Update>>) {
  bot.start((ctx) => {
    const { username } = ctx.from;

    const randomPrompt1 = getRandomPrompt();
    const randomPrompt2 = getRandomPrompt();
    const randomPrompt3 = getRandomPrompt();

    ctx.replyWithMarkdownV2(
      `👋 **Welcome to kdiffimage Bot\\!**\n\n` +
        `🖼️ Here you can create any image you want with the **Stable Diffusion AI**\\!\\! \n\n` +
        `**❗ You can log in to the website to make your images private/public and share them ❗**\n` +
        `**❗ By default all generated images are PRIVATE\n` +
        `\`https://tg-bot-ada-thing.vercel.app\` \n\n` +
        `⚙️ **Commands you can use:**\n` +
        `\\- \`/generateimage\`:   Generate a single image based on your prompt\\.\n` +
        `\\- \`/multiimage\`:   Generate **3 images** from a single prompt\\.\n` +
        `\\- \`/recommended\`:   Recommends **3 prompts** to try\\.\n` +
        `\\- \`/random\`:   Generates a totally random image\\.\n` +
        `\\- \`/anime\`:   Generates a funny **anime\\-themed** picture\\.\n\n` +
        `💻 **Source Code:** [View on GitHub](https://github\\.com/kdiffin/tg-bot-ada-thing)\n\n` +
        `🌟 Don't have any ideas? Try these prompts:\n\n` +
        `\\- \`${"/generateimage " + randomPrompt1}\`\n` +
        `\\- \`${"/multiimage " + randomPrompt2}\`\n` +
        `\\- \`${"/generateimage " + randomPrompt3}\`\n`,

      Markup.inlineKeyboard([
        [
          Markup.button.callback("🎴 Anime-Themed Image", "generate_anime"),
          Markup.button.callback(
            "🚽 Brainrot-Themed Image",
            "generate_brainrot"
          ),
        ],
        [Markup.button.callback("🔄 Generate Random Image", "generate_random")],
        [
          Markup.button.url(
            "🖼 View Your Gallery",
            `https://tg-bot-ada-thing.vercel.app/user/${username}`
          ),
        ],
        [Markup.button.callback("🌟 Recommended Prompts", "show_recommended")],
      ])
    );
  });

  bot.command("generateimage", async (ctx) => {
    const message = ctx.message?.text.split(" ").slice(1).join(" ");
    if (!message) {
      ctx.reply("Please provide a text prompt after `/generateimage`.");
      return;
    }
    await generateSingleImage(ctx, message);
  });

  bot.command("multiimage", async (ctx) => {
    const message = ctx.message?.text.split(" ").slice(1).join(" ");
    if (!message) {
      ctx.reply("Please provide a text prompt after `/multiimage`.");
      return;
    }
    const promises = [
      generateSingleImage(ctx, message),
      generateSingleImage(ctx, message),
      generateSingleImage(ctx, message),
    ];
    // this makes it so that if ONE error happens the whole thing isnt cancelled
    await Promise.allSettled(promises);
    ctx.reply("Batch image generation complete.");
  });

  bot.command("showprofile", async (ctx) => {
    const { first_name, username } = ctx.from;

    await ctx.replyWithMarkdownV2(
      `🎨 **Your Profile**\n\n` +
        `**Name:** ${first_name}\n` +
        `**Username:** @${username}\n\n` +
        `**Note:** Please log in to see all of your images\n\n` +
        `Click below to see all your generated images\\!`,
      Markup.inlineKeyboard([
        [
          Markup.button.url(
            "🖼 View Your Gallery",
            `https://tg-bot-ada-thing.vercel.app/user/${username}`
          ),
        ],
      ])
    );
  });

  bot.command("recommended", async (ctx) => {
    const randomPrompt1 = getRandomPrompt();
    const randomPrompt2 = getRandomPrompt();
    const randomPrompt3 = getRandomPrompt();

    const message = await ctx.replyWithMarkdownV2(
      `🌟 **Here are some cool prompts you should try\\!\\!**\n\n` +
        `\`${"/generateimage " + randomPrompt1}\`\n` +
        `\`${"/multiimage " + randomPrompt2}\`\n` +
        `\`${"/generateimage " + randomPrompt3}\`\n`,
      Markup.inlineKeyboard([
        [Markup.button.callback("🔁 Different Prompts", "replace_recommended")],
      ])
    );
  });

  bot.command("anime", async (ctx) => {
    const prompt = getRandomAnimePrompt();
    await generateSingleImage(ctx, prompt, prompt);
  });

  bot.command("brainrot", async (ctx) => {
    const prompt = getRandomPromptBrainrot();
    await generateSingleImage(ctx, prompt, prompt);
  });

  bot.command("random", async (ctx) => {
    const prompt = getRandomPromptAll();
    await generateSingleImage(ctx, prompt, prompt);
  });
}
