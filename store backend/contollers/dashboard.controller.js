export const getDashboard = async (req, res) => {
  try {
    // You could pull user info from req.user if needed
    const userId = req.user.id;

    // Example response (you can customize this based on your frontend's needs)
    res.status(200).json({
      message: "Dashboard data fetched successfully",
      data: {
        userId,
        welcomeMessage: "Welcome to your dashboard!",
        notifications: [],
        stats: {},
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
