const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const db = require("../config/db");

exports.registerUser = async (req, res) => {
  try {

    const {
      full_name,
      email,
      password,
      phone,
      role_id
    } = req.body;

    if (!full_name || !email || !password || !role_id) {
      return res.status(400).json({
        message: "Missing required fields"
      });
    }

    const [existing] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existing.length > 0) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      `INSERT INTO users (full_name,email,password,phone,role_id)
       VALUES (?,?,?,?,?)`,
      [
        full_name,
        email,
        hashedPassword,
        phone || null,
        Number(role_id)
      ]
    );

    res.status(201).json({
      message: "User registered successfully"
    });

  } catch (error) {
    console.log("REGISTER ERROR:", error); // IMPORTANT
    res.status(500).json({
      message: error.message
    });
  }
};

exports.loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const [users] = await db.query(
      `
      SELECT users.*, roles.role_name
      FROM users
      JOIN roles
      ON users.role_id = roles.id
      WHERE email = ?
      `,
      [email]
    );

    if (users.length === 0) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const user = users[0];

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const token = generateToken(
      user.id,
      user.role_name
    );

    res.json({
      token,
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        role: user.role_name
      }
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error); // IMPORTANT
    res.status(500).json({
      message: error.message
    });
  }
};