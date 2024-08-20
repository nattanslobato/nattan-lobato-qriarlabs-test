import { Router } from "express";
import DonationController from "../controllers/DonationController";

const donationRoutes = Router();

donationRoutes.get("/", DonationController.getDonations)
donationRoutes.get("/:id", DonationController.getDonationById)
donationRoutes.post("/", DonationController.createDonation)
donationRoutes.put("/", DonationController.updateDonation)
donationRoutes.delete("/:id", DonationController.deleteDonation)

export { donationRoutes };