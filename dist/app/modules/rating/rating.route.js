"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const rating_controller_1 = require("./rating.controller");
const router = express_1.default.Router();
router.post("/", rating_controller_1.RatingControllers.createRating);
exports.RatingRoutes = router;
