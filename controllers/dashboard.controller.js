import User from "../models/user.model.js"; // make sure you have this import

export const getDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    // ✅ Fetch the user by ID
    const user = await User.findById(userId).select("fullName email");

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({
      message: "Dashboard data fetched successfully",
      data: {
        userId,
        welcomeMessage: `Welcome ${user.fullName}!`, // ✅ fullName, not fullname
        user: {
          fullName: user.fullName,
          email: user.email,
        },
        notifications: [],
        stats: {},
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
