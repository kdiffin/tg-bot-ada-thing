import { inference, model } from "./huggingface";

export async function generateSingleImage(ctx: any, message: string) {
  // Send the "Generating image..." message and capture its ID
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
    await ctx.replyWithPhoto({ source: buffer });
  } catch (error) {
    console.error("Error while generating the image:", error);
    await ctx.reply("An error occurred while processing your request.");
  } finally {
    // Clean up the "Generating image..." message
    await ctx.deleteMessage(generatingMessageId);
  }
}
