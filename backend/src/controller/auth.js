const query = require("../config/database");
const { randomUUID } = require("crypto");
const bcryptjs = require("bcryptjs");

async function register(req, res) {
  const { username, email, phone, password, confPassword} = req.body;

  if (
    username === undefined ||
    username === "" ||
    email === undefined ||
    email === "" ||
    phone === undefined ||
    isNaN(+phone) ||
    password === undefined ||
    password === "" ||
    confPassword === undefined ||
    confPassword === ""
  )
    return res.status(400).json("Invalid data!");

  if (password !== confPassword) return res.status(400).json("Password not match!");

  try {
    // logic handling
    const isDuplicate = await query(
      `
        SELECT id FROM tb_auth WHERE phone = ? OR email = ? 
    `,
      [phone, email]
    );

    if (isDuplicate.length > 0) return res.status(400).json("User already exists!");

    const salt = await bcryptjs.genSalt(12);
    const hash = await bcryptjs.hash(password, salt);

    await query(
      `
        INSERT INTO tb_auth (
            uuid, username, email, phone, password
        ) VALUES (
            ?, ?, ?, ?, ?
        );
    `, 
      [randomUUID(), username, email, phone, hash]
    );

    return res.status(200).json("Register success!");
  } catch (error) {
    return res.status(400).json("Something went wrong!");
  }
}



async function login(req, res) {
  const {} = req.body;
  try {
    // logic handling
  } catch (error) {
    return res.status(400).json("Something went wrong!");
  }
}

module.exports = {
  register,
  login,
};
