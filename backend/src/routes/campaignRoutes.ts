import { Router } from "express";
import CampaignController from "../modules/campaign/CampaignController";

const campaignRoutes = Router();

campaignRoutes.get("/getCampaigns", CampaignController.getCampaigns)
campaignRoutes.get("/getCampaignById/:id", CampaignController.getCampaignById)
campaignRoutes.post("/createCampaign", CampaignController.createCampaign)
campaignRoutes.put("/updateCampaign", CampaignController.updateCampaign)
campaignRoutes.delete("/deleteCampaign/:id", CampaignController.deleteCampaign)

export { campaignRoutes };