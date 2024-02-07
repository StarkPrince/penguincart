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
const app = require("express");
const router = app.Router();
const { user } = require("../utils");
router.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield user.createUser(req.body);
        res.status(201).send(newUser);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}));
router.get("/get/:uid", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFound = yield user.getUser(req.params.uid);
        res.status(200).send(userFound);
    }
    catch (error) {
        res.status(404).send(error.message);
    }
}));
module.exports = router;
