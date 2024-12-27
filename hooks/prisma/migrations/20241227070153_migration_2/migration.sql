-- CreateTable
CREATE TABLE "ZapRun" (
    "id" TEXT NOT NULL,
    "ZapId" TEXT NOT NULL,

    CONSTRAINT "ZapRun_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ZapRun" ADD CONSTRAINT "ZapRun_ZapId_fkey" FOREIGN KEY ("ZapId") REFERENCES "Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
