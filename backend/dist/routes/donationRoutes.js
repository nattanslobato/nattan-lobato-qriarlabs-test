"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.donationRoutes = void 0;
const express_1 = require("express");
const DonationController_1 = __importDefault(require("../controllers/DonationController"));
const donationRoutes = (0, express_1.Router)();
exports.donationRoutes = donationRoutes;
donationRoutes.get("/", DonationController_1.default.getDonations);
donationRoutes.get("/:id", DonationController_1.default.getDonationById);
donationRoutes.post("/", DonationController_1.default.createDonation);
donationRoutes.put("/", DonationController_1.default.updateDonation);
donationRoutes.delete("/:id", DonationController_1.default.deleteDonation);
