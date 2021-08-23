const authCtrl = {};
const User = require("../users/user.model");
const jwt = require("jsonwebtoken");
const config = require("../config");
const Role = require("../models/Role");

authCtrl.createUser = async (req, res) => {
  try {
    const { name, email, password, roles } = req.body;

    const newUser = new User({
      name,
      email,
      password: await User.encryptPassword(password),
    });

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "moderator" });
      newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();
    console.log(savedUser);

    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 86400, //24hrs
    });

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

authCtrl.loginUser = async (req, res) => {
  try {
    const userFound = await User.findOne({ email: req.body.email }).populate(
      "roles"
    );

    if (!userFound) return res.status(400).json({ message: "User not found" });

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json({ token: null, message: "Invalid password" });

    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
      expiresIn: 86400,
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = authCtrl;
// {} [] || \\
