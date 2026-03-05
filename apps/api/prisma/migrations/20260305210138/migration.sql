/*
  Warnings:

  - A unique constraint covering the columns `[apiId]` on the table `Country` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[apiId]` on the table `League` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Country_apiId_key" ON "Country"("apiId");

-- CreateIndex
CREATE UNIQUE INDEX "League_apiId_key" ON "League"("apiId");
