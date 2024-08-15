-- DropForeignKey
ALTER TABLE "donation" DROP CONSTRAINT "donation_campaign_id_fkey";

-- AddForeignKey
ALTER TABLE "donation" ADD CONSTRAINT "donation_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "campaign"("campaign_id") ON DELETE CASCADE ON UPDATE CASCADE;
