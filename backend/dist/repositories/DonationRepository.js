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
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const getDonations = () => __awaiter(void 0, void 0, void 0, function* () {
    return database_1.prisma.donation.findMany();
});
const getDonationById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return database_1.prisma.donation.findUnique({
        where: { donation_id: id }
    });
});
const createDonation = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return database_1.prisma.donation.create({
        data
    });
});
const updateDonation = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return database_1.prisma.donation.update({
        where: { donation_id: id },
        data
    });
});
const deleteDonation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return database_1.prisma.donation.delete({
        where: { donation_id: id }
    });
});
exports.default = { getDonations, getDonationById, createDonation, updateDonation, deleteDonation };
