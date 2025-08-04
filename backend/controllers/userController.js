import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const registerUser = asyncHandler (async (req, res) => {
    res.status(200).json({ message: 'Register user' })
});

const authUser = asyncHandler (async (req, res) => {
    res.status(200).json({ message: 'Auth user' })
});

const logoutUser = asyncHandler (async (req, res) => {
    res.status(200).json({ message: 'Logout user' })
});

const getUserProfile = asyncHandler (async (req, res) => {
    res.status(200).json({ message: 'get user profile' })
});

const updateUserProfile = asyncHandler (async (req, res) => {
    res.status(200).json({ message: 'Update user profile' })
});

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile };