import { User } from "../model/user.model";
const db = require("../db");

export const createUser = async (user: User) => {
  if (!user.uid) {
    throw new Error("User must have a uid");
  }
  const userExists = await db.User.findOne({ where: { uid: user.uid } });
  if (userExists) {
    throw new Error("User already exists");
  } else {
    const newUser = await db.User.create(user);
    return newUser;
  }
};

export const getUser = async (uid: string) => {
  const user = await db.User.findOne({ where: { uid } });
  if (!user) {
    throw new Error("User not found");
  } else {
    return user;
  }
};

export const updateUser = async (uid: string, user: User) => {
  const updatedUser = await db.User.update(user, { where: { uid } });
  return updatedUser;
};

export const deleteUser = async (uid: string) => {
  const deletedUser = await db.User.destroy({ where: { uid } });
  return deletedUser;
};

export const getAllUsers = async () => {
  const users = await db.User.findAll();
  return users;
};
