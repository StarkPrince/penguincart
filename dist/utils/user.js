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
exports.getAllUsers = exports.deleteUser = exports.updateUser = exports.getUser = exports.createUser = void 0;
const db = require("../db");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user.uid) {
        throw new Error("User must have a uid");
    }
    const userExists = yield db.User.findOne({ where: { uid: user.uid } });
    if (userExists) {
        throw new Error("User already exists");
    }
    else {
        const newUser = yield db.User.create(user);
        return newUser;
    }
});
exports.createUser = createUser;
const getUser = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield db.User.findOne({ where: { uid } });
    if (!user) {
        throw new Error("User not found");
    }
    else {
        return user;
    }
});
exports.getUser = getUser;
const updateUser = (uid, user) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield db.User.update(user, { where: { uid } });
    return updatedUser;
});
exports.updateUser = updateUser;
const deleteUser = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield db.User.destroy({ where: { uid } });
    return deletedUser;
});
exports.deleteUser = deleteUser;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield db.User.findAll();
    return users;
});
exports.getAllUsers = getAllUsers;
