import { UserService } from "./user.service.js";

export const createUser = async (req, res) => {
  try {
    const user = await UserService.createUser(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({success: false, message: error.message})
  }
};
