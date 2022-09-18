/*
  Warnings:

  - Changed the type of `weekDays` on the `Ad` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Ad" DROP COLUMN "weekDays";
ALTER TABLE "Ad" ADD COLUMN     "weekDays" STRING NOT NULL;
