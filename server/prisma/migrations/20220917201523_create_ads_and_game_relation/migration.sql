-- CreateTable
CREATE TABLE "Ad" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "yearsPlaying" INT4 NOT NULL,
    "discord" STRING NOT NULL,
    "weekDays" JSONB NOT NULL,
    "hourStart" INT4 NOT NULL,
    "hourEnd" INT4 NOT NULL,
    "useVoiceChannel" BOOL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gameId" STRING NOT NULL,

    CONSTRAINT "Ad_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ad" ADD CONSTRAINT "Ad_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
