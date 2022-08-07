/*
  Warnings:

  - You are about to drop the column `eventId` on the `Talk` table. All the data in the column will be lost.
  - Added the required column `talkId` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "duration" INTEGER NOT NULL,
    "format" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "talkId" TEXT NOT NULL,
    CONSTRAINT "Event_talkId_fkey" FOREIGN KEY ("talkId") REFERENCES "Talk" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Event" ("createdAt", "date", "description", "duration", "format", "id", "name", "place", "updatedAt") SELECT "createdAt", "date", "description", "duration", "format", "id", "name", "place", "updatedAt" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
CREATE UNIQUE INDEX "Event_talkId_key" ON "Event"("talkId");
CREATE TABLE "new_Talk" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Talk" ("createdAt", "description", "id", "name", "updatedAt") SELECT "createdAt", "description", "id", "name", "updatedAt" FROM "Talk";
DROP TABLE "Talk";
ALTER TABLE "new_Talk" RENAME TO "Talk";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
