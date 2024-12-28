import { Context, Telegraf, Markup } from "telegraf";
import { generateSingleImage } from "./generateImage";
import {
  getRandomPrompt,
  getRandomAnimePrompt,
  getRandomPromptBrainrot,
} from "./utils";
import { Update } from "telegraf/typings/core/types/typegram";

export function setupButtons(bot: Telegraf<Context<Update>>) {
  bot.action("generate_random", async (ctx) => {
    const prompt = getRandomPrompt();
    await generateSingleImage(ctx, prompt);
    ctx.reply("Generated a random image!");
    ctx.answerCbQuery("Generated a random image!");
  });

  bot.action("generate_anime", async (ctx) => {
    const prompt = getRandomAnimePrompt();
    await generateSingleImage(ctx, prompt);
    ctx.reply("Generated an anime-themed image!");
    ctx.answerCbQuery("Generated an anime-themed image!");
  });

  bot.action("generate_brainrot", async (ctx) => {
    const prompt = getRandomPromptBrainrot();
    await generateSingleImage(ctx, prompt);
    ctx.reply("Generated a brainrot-themed image!");
    ctx.answerCbQuery("Generated a brainrot-themed image!");
  });

  bot.action("show_recommended", (ctx) => {
    const randomPrompt1 = getRandomPrompt();
    const randomPrompt2 = getRandomPrompt();
    const randomPrompt3 = getRandomPrompt();

    ctx.reply(
      `🌟 **Here are some cool prompts you should try!!**\n\n` +
        `\`${"/generateimage " + randomPrompt1}\`\n` +
        `\`${"/multiimage " + randomPrompt2}\`\n` +
        `\`${"/generateimage " + randomPrompt3}\`\n`,
      { parse_mode: "Markdown" }
    );
    ctx.answerCbQuery("Check out these recommended prompts!");
  });
}
