import { Router } from "express";
import { campaignRoutes } from "./campaignRoutes";

const routes = Router();

routes.use("/campaign", campaignRoutes)

export { routes }