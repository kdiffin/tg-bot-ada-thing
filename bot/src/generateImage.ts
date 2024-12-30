import { inference, model } from "./huggingface";
import prismaClient from "./prisma";

export async function generateSingleImage(
  ctx: any,
  message: string,
  displayPrompt?: string
) {
  // Send the "Generating image..." message and capture its ID
  if (displayPrompt) {
    ctx.reply(displayPrompt);
  }
  const generatingMessage = await ctx.reply("Generating image...");
  let generatingMessageId = generatingMessage.message_id;

  try {
    // Generate the image
    const result = await inference.textToImage({
      inputs: message,
      model,
    });

    // Convert the result to a Buffer
    const blobBuffer = await result.arrayBuffer();
    const buffer = Buffer.from(blobBuffer);

    // Send the generated image
    ctx.replyWithPhoto({ source: buffer });

    const base64Image = buffer.toString("base64");
    // Save the result to the database
    await prismaClient.image.create({
      data: {
        usersTelegramID: ctx.from.id.toString(),
        usersName: ctx.from.username ?? "Unknown",
        image: base64Image,
        public: false,
        imagePrompt: message,
      },
    });
  } catch (error) {
    console.error("Error while generating the image:", error);
    await ctx.reply("An error occurred while processing your request.");
  } finally {
    // Clean up the "Generating image..." message
    await ctx.deleteMessage(generatingMessageId);
  }
}
