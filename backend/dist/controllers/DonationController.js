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
const DonationRepository_1 = __importDefault(require("../repositories/DonationRepository"));
const CampaignRepository_1 = __importDefault(require("../repositories/CampaignRepository"));
const getDonations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const donation = yield DonationRepository_1.default.getDonations();
        return res.status(200).send({ message: "Successful search.", donation });
    }
    catch (error) {
        return res.status(400).send({ message: "Error when searching for donations.", error });
    }
});
const getDonationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const donation = yield DonationRepository_1.default.getDonationById(Number(id));
        if (!donation) {
            return res.status(404).send({ message: "Donation not found." });
        }
        return res.status(200).send({ message: "Donation found.", donation });
    }
    catch (error) {
        return res.status(400).send({ message: "Error when searching for donation.", error });
    }
});
const createDonation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, value, campaign_id } = req.body;
        const campaignExist = yield CampaignRepository_1.default.getCampaignById(Number(campaign_id));
        if (!campaignExist) {
            return res.status(404).send({ message: "Campaign not found." });
        }
        const newDonation = yield DonationRepository_1.default.createDonation({ name, value, campaign_id });
        return res.status(201).send({ message: "Donation created successfully.", newDonation });
    }
    catch (error) {
        return res.status(400).send({ message: "Error when creating donation.", error });
    }
});
const updateDonation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name, value } = req.body;
        const donationExist = yield DonationRepository_1.default.getDonationById(Number(id));
        if (!donationExist) {
            return res.status(404).send({ message: "Donation not found." });
        }
        const donation = yield DonationRepository_1.default.updateDonation(Number(id), { name, value });
        return res.status(200).send({ message: "Donation updated successfully.", donation });
    }
    catch (error) {
        return res.status(400).send({ message: "Error when updating donation.", error });
    }
});
const deleteDonation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const donationExist = yield DonationRepository_1.default.getDonationById(Number(id));
        if (!donationExist) {
            return res.status(404).send({ message: "Donation not found." });
        }
        const donation = yield DonationRepository_1.default.deleteDonation(Number(id));
        return res.status(200).send({ message: "Donation successfully deleted.", donation });
    }
    catch (error) {
        return res.status(400).send({ message: "Error when deleting donation.", error });
    }
});
exports.default = { getDonations, getDonationById, createDonation, updateDonation, deleteDonation };
