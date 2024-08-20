import { Router } from "express";
import CampaignController from "../controllers/CampaignController";

const campaignRoutes = Router();

campaignRoutes.get("/", CampaignController.getCampaigns)
campaignRoutes.get("/:id", CampaignController.getCampaignById)
campaignRoutes.post("/", CampaignController.createCampaign)
campaignRoutes.put("/", CampaignController.updateCampaign)
campaignRoutes.delete("/:id", CampaignController.deleteCampaign)

export { campaignRoutes };