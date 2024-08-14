import { Router } from "express";
import { campaignRoutes } from "./campaignRoutes";
import { donationRoutes } from "./donationRoutes";

const routes = Router();

routes.use("/campaign", campaignRoutes)
routes.use("/donation", donationRoutes)

export { routes }