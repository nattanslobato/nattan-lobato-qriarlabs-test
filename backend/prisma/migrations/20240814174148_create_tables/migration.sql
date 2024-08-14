-- CreateTable
CREATE TABLE "campaign" (
    "campaign_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "target_value" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "campaign_pkey" PRIMARY KEY ("campaign_id")
);

-- CreateTable
CREATE TABLE "donation" (
    "donation_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "campaign_id" INTEGER NOT NULL,

    CONSTRAINT "donation_pkey" PRIMARY KEY ("donation_id")
);

-- AddForeignKey
ALTER TABLE "donation" ADD CONSTRAINT "donation_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "campaign"("campaign_id") ON DELETE RESTRICT ON UPDATE CASCADE;
