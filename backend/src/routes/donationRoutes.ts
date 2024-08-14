import { Router } from "express";
import DonationController from "../modules/donation/DonationController";

const donationRoutes = Router();

donationRoutes.get("/getDonations", DonationController.getDonations)
donationRoutes.get("/getDonationById/:id", DonationController.getDonationById)
donationRoutes.post("/createDonation", DonationController.createDonation)
donationRoutes.put("/updateDonation", DonationController.updateDonation)
donationRoutes.delete("/deleteDonation/:id", DonationController.deleteDonation)

export { donationRoutes };