-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "usersTelegramID" VARCHAR NOT NULL,
    "usersName" VARCHAR NOT NULL,
    "image" TEXT NOT NULL,
    "imagePrompt" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);
