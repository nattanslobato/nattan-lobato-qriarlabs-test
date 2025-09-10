"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.campaignRoutes = void 0;
const express_1 = require("express");
const CampaignController_1 = __importDefault(require("../controllers/CampaignController"));
const campaignRoutes = (0, express_1.Router)();
exports.campaignRoutes = campaignRoutes;
campaignRoutes.get("/", CampaignController_1.default.getCampaigns);
campaignRoutes.get("/:id", CampaignController_1.default.getCampaignById);
campaignRoutes.post("/", CampaignController_1.default.createCampaign);
campaignRoutes.put("/", CampaignController_1.default.updateCampaign);
campaignRoutes.delete("/:id", CampaignController_1.default.deleteCampaign);
