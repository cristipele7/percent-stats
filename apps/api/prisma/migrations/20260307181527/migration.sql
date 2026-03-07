/*
  Warnings:

  - You are about to drop the column `apiId` on the `Country` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Country_apiId_key";

-- AlterTable
ALTER TABLE "Country" DROP COLUMN "apiId";
