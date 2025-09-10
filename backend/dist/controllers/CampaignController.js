"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CampaignRepository_1 = __importDefault(require("../repositories/CampaignRepository"));
const getCampaigns = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const campaign = yield CampaignRepository_1.default.getCampaigns();
        return res.status(200).send({ message: "Successful search.", campaign });
    }
    catch (error) {
        return res.status(400).send({ message: "Error when searching for campaigns.", error });
    }
});
const getCampaignById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const campaign = yield CampaignRepository_1.default.getCampaignById(Number(id));
        if (!campaign) {
            return res.status(404).send({ message: "Campaign not found." });
        }
        return res.status(200).send({ message: "Campaign found.", campaign });
    }
    catch (error) {
        return res.status(400).send({ message: "Error when searching for campaign.", error });
    }
});
const createCampaign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, target_value, image } = req.body;
        const newCampaign = yield CampaignRepository_1.default.createCampaign({ name, description, target_value, image });
        return res.status(201).send({ message: "Campaign created successfully.", newCampaign });
    }
    catch (error) {
        return res.status(400).send({ message: "Error when creating campaign.", error });
    }
});
const updateCampaign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name, description, target_value, image } = req.body;
        const campaignExist = yield CampaignRepository_1.default.getCampaignById(Number(id));
        if (!campaignExist) {
            return res.status(404).send({ message: "Campaign not found." });
        }
        const campaign = yield CampaignRepository_1.default.updateCampaign(Number(id), { name, description, target_value, image });
        return res.status(200).send({ message: "Campaign updated successfully.", campaign });
    }
    catch (error) {
        return res.status(400).send({ message: "Error when updating campaign.", error });
    }
});
const deleteCampaign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const campaignExist = yield CampaignRepository_1.default.getCampaignById(Number(id));
        if (!campaignExist) {
            return res.status(404).send({ message: "Campaign not found." });
        }
        const campaign = yield CampaignRepository_1.default.deleteCampaign(Number(id));
        return res.status(200).send({ message: "Campaign successfully deleted.", campaign });
    }
    catch (error) {
        return res.status(400).send({ message: "Error when deleting campaign.", error });
    }
});
exports.default = { getCampaigns, getCampaignById, createCampaign, updateCampaign, deleteCampaign };
