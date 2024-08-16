import { Router } from "express";
import CampaignController from "../modules/campaign/CampaignController";

const campaignRoutes = Router();

campaignRoutes.get("/", CampaignController.getCampaigns)
campaignRoutes.get("/:id", CampaignController.getCampaignById)
campaignRoutes.post("/", CampaignController.createCampaign)
campaignRoutes.put("/", CampaignController.updateCampaign)
campaignRoutes.delete("/:id", CampaignController.deleteCampaign)

export { campaignRoutes };