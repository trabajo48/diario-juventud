const { ROLES } = require("../models/Role");
const User = require("../users/user.model");

const checkDuplicateNameOrEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });

    if (user)
      return res.status(400).json({ message: "The user already exist" });

    const email = await User.findOne({ email: req.body.email });
    if (email)
      return res.status(400).json({ message: "The email already exist" });

    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: `Role ${req.body.roles[i]} does not exist`,
        });
      }
    }
  }

  next();
};

export { checkDuplicateNameOrEmail, checkRolesExisted };
// {} [] || \\
