


export const getUser = async (req, res) => {
  try {
    return res.status(201).json({
      status: true,
      message: "User fetched successfully",
      data: req.user,
    });
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ status: false, message: "Internal server error", err: error });
  }
};
