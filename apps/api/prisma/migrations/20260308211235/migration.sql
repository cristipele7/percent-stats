-- CreateEnum
CREATE TYPE "MatchState" AS ENUM ('NOT_STARTED', 'FIRST_HALF', 'HALF_TIME', 'SECOND_HALF', 'FULL_TIME');

-- CreateTable
CREATE TABLE "Match" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "apiId" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "round" INTEGER NOT NULL,
    "state" "MatchState" NOT NULL,
    "leagueId" TEXT NOT NULL,
    "homeTeamId" TEXT NOT NULL,
    "homeTeamGoals" INTEGER NOT NULL,
    "awayTeamId" TEXT NOT NULL,
    "awayTeamGoals" INTEGER NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Match_apiId_key" ON "Match"("apiId");

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "League"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_homeTeamId_fkey" FOREIGN KEY ("homeTeamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_awayTeamId_fkey" FOREIGN KEY ("awayTeamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
