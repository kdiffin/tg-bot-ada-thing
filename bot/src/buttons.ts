import { Context, Telegraf, Markup } from "telegraf";
import { generateSingleImage } from "./generateImage";
import {
  getRandomPrompt,
  getRandomAnimePrompt,
  getRandomPromptBrainrot,
} from "./utils";
import { Update } from "telegraf/typings/core/types/typegram";
import { inlineKeyboard } from "telegraf/typings/markup";

export function setupButtons(bot: Telegraf<Context<Update>>) {
  // change recommendations function
  bot.action("replace_recommended", async (ctx) => {
    const randomPrompt1 = getRandomPrompt();
    const randomPrompt2 = getRandomPrompt();
    const randomPrompt3 = getRandomPrompt();

    await ctx.editMessageText(
      `🌟 **Here are some cool prompts you should try\\!\\!**\n\n` +
        `\`${"/generateimage " + randomPrompt1}\`\n` +
        `\`${"/multiimage " + randomPrompt2}\`\n` +
        `\`${"/generateimage " + randomPrompt3}\`\n`,
      {
        parse_mode: "MarkdownV2",

        // Add button to replace recommended here
        reply_markup: {
          inline_keyboard: [
            [
              Markup.button.callback(
                "🔁 Different Prompts",
                "replace_recommended"
              ),
            ],
          ],
        },
      }
    );

    await ctx.answerCbQuery();
  });

  bot.action("generate_random", async (ctx) => {
    // Acknowledge the callback query immediately
    const prompt = getRandomPrompt();
    await ctx.answerCbQuery("Generating " + prompt + "...");

    await generateSingleImage(ctx, prompt, prompt);
    ctx.reply("Generated " + prompt);
  });

  bot.action("generate_anime", async (ctx) => {
    const prompt = getRandomAnimePrompt();
    // Acknowledge the callback query immediately
    await ctx.answerCbQuery("Generating " + prompt + "...");

    await generateSingleImage(ctx, prompt, prompt);
    ctx.reply("Generated " + prompt);
  });

  bot.action("show_recommended", async (ctx) => {
    const randomPrompt1 = getRandomPrompt();
    const randomPrompt2 = getRandomPrompt();
    const randomPrompt3 = getRandomPrompt();

    await ctx.replyWithMarkdownV2(
      `🌟 **Here are some cool prompts you should try\\!\\!**\n\n` +
        `\`${"/generateimage " + randomPrompt1}\`\n` +
        `\`${"/multiimage " + randomPrompt2}\`\n` +
        `\`${"/generateimage " + randomPrompt3}\`\n`,
      Markup.inlineKeyboard([
        [Markup.button.callback("🔁 Different Prompts", "replace_recommended")],
      ])
    );
    await ctx.answerCbQuery();
  });

  bot.action("generate_brainrot", async (ctx) => {
    // Acknowledge the callback query immediately
    const prompt = getRandomPromptBrainrot();
    await ctx.answerCbQuery("Generating a  " + prompt + "...");

    await generateSingleImage(ctx, prompt, prompt);
    ctx.reply("Generated  " + prompt + "!");
  });
}
